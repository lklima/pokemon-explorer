import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useQuery } from '@apollo/client';
import ReactLoading from 'react-loading';

import {
  Header,
  Container,
  Info,
  Row,
  Field,
  Value,
  Name,
  Number,
  Category,
  BoxContainer,
  TextBox,
  LoadView,
  EditButton,
} from './styles';
import { GET_POKEMON } from '../../graphql/queries';
import { pokemonsVar } from '../../graphql/cache';
import EditModal from '../../components/EditModal';

const Details = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const { data } = useQuery(GET_POKEMON, { variables: { id } });
  const [pokemon, setPokemon] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [maxHP, setMaxHP] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const savedPokemons = pokemonsVar();

  useEffect(() => getData(), [data, getData]);

  function getData() {
    setPokemon(null);
    if (data) {
      savedPokemons.map((i) => {
        if (i.id === id) {
          setMaxHP(i.maxHP);
          setWeight(i.weight.minimum);
          setHeight(i.height.minimum);
        }
      });

      setPokemon(data.pokemon);
    }
  }

  function handleEdit(data) {
    let index = 0;

    savedPokemons.map((i) => {
      index += 1;
      if (id === i.id) {
        savedPokemons[index - 1].maxHP = data.maxHP;
        savedPokemons[index - 1].height.minimum = data.height;
        savedPokemons[index - 1].weight.minimum = data.weight;
      }
    });

    localStorage.setItem(
      'pokemons',
      JSON.stringify(savedPokemons.map((i) => ({ ...i }))),
    );
    getData();
  }

  return (
    <div id="main">
      <Header>
        <Link to="/">
          <FiArrowLeft size={35} />
          Back
        </Link>
      </Header>

      <Container>
        {pokemon ? (
          <header>
            <div>
              <img src={pokemon.image} alt="pokemon" />

              <EditButton
                data-testid="edit-button"
                onClick={() => setOpenModal(!openModal)}
              >
                Edit
              </EditButton>
            </div>

            <Info>
              <Row>
                <Name>{pokemon.name}</Name>
                <Number>#{pokemon.number}</Number>
              </Row>

              <Row>
                <Field>Category</Field>
                <Value>{pokemon.classification}</Value>
              </Row>
              <Row>
                <Field>Heigth</Field>
                <Value>{height}</Value>
              </Row>

              <Row>
                <Field>Weigth</Field>
                <Value>{weight}</Value>
              </Row>

              <Row>
                <Field>Max. HP</Field>
                <Value>{maxHP}</Value>
              </Row>

              <Category>Type</Category>

              <BoxContainer>
                {pokemon.types.map((i) => (
                  <TextBox type={i} key={i}>
                    {i}
                  </TextBox>
                ))}
              </BoxContainer>

              <Category>Weaknesses</Category>

              <BoxContainer>
                {pokemon.weaknesses.map((i) => (
                  <TextBox type={i} key={i}>
                    {i}
                  </TextBox>
                ))}
              </BoxContainer>

              {pokemon.evolutions && (
                <>
                  <Category>Evolutions</Category>

                  <BoxContainer>
                    {pokemon.evolutions.map((i) => (
                      <div key={i.name}>
                        <img src={i.image} alt={i.name} />
                        <h1>{i.name}</h1>
                      </div>
                    ))}
                  </BoxContainer>
                </>
              )}
            </Info>
          </header>
        ) : (
          <LoadView>
            <ReactLoading
              type="bubbles"
              color="#bf360c"
              height="15%"
              width="15%"
            />
          </LoadView>
        )}
      </Container>

      {pokemon && (
        <EditModal
          modalIsOpen={openModal}
          pokemon={pokemon}
          currentData={{ maxHP, height, weight }}
          closeModal={() => setOpenModal(false)}
          edit={handleEdit}
        />
      )}
    </div>
  );
};

export default Details;
