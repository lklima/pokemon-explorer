import React, { useState } from 'react';
import Modal from 'react-modal';

import { modalStyle, CardContent, Row, EditButton } from './styles';

export default function EditModal({
  modalIsOpen,
  closeModal,
  pokemon,
  currentData,
  edit,
}) {
  const [weight, setWeight] = useState(
    currentData.weight.replace(/[^0-9]/g, ''),
  );
  const [height, setHeight] = useState(
    currentData.height.replace(/[^0-9]/g, ''),
  );
  const [maxHP, setHp] = useState(currentData.maxHP);

  function handleSave(e) {
    e.preventDefault();
    const data = {
      weight: `${weight}kg`,
      height: `${height}m`,
      maxHP: Number(maxHP),
    };

    edit(data);
    closeModal();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      style={modalStyle}
      ariaHideApp={false}
    >
      <CardContent onSubmit={handleSave}>
        <div id="imgView">
          <img id="img" src={pokemon.image} alt={pokemon.name} />
        </div>

        <span id="cardHead">
          <p id="name">{pokemon.name}</p>
        </span>

        <Row>
          <p>Weight:</p>

          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            required
            data-testid="weight-input"
            value={weight}
            maxLength={4}
          />
        </Row>

        <Row>
          <p>Height:</p>

          <input
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            data-testid="height-input"
            required
            value={height}
          />
        </Row>

        <Row>
          <p>Max. HP:</p>

          <input
            onChange={(e) => setHp(e.target.value)}
            type="number"
            data-testid="hp-input"
            required
            maxLength={4}
            value={maxHP}
          />
        </Row>

        <Row>
          <EditButton>Save</EditButton>
        </Row>
      </CardContent>
    </Modal>
  );
}
