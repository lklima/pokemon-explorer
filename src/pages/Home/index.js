import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useQuery, gql } from '@apollo/client';
import ReactLoading from 'react-loading';

import api from '../../services/api';
import Pokemon from '../../components/Pokemon';

import { Title, Form, ItemsContainer, Error } from './styles';

const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 151) {
      id
      number
      name
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_POKEMONS);
  const [pokemons, setPokemons] = useState([]);
  const [newRepo, setNewRepo] = useState('');
  const [inputErro, setInputError] = useState('');
  const [repositories, setReposistories] = useState(() => {
    const storageRepositories = localStorage.getItem('repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    if (!loading && data) setPokemons(data.pokemons);
  }, [loading, data]);

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddReposistories(event) {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o nome do repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
      setReposistories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro ao buscar repositório');
    }
  }

  return (
    <>
      <Title>Pokemons Explorer</Title>

      <Form hasError={!!inputErro} onSubmit={handleAddReposistories}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Limpar</button>
      </Form>

      {inputErro && <Error>{inputErro}</Error>}

      <ItemsContainer>
        {loading ? (
          <ReactLoading type="bubbles" color="black" height="15%" width="15%" />
        ) : (
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </ItemsContainer>
    </>
  );
};

export default Home;
