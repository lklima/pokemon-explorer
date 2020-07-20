import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import EditModal from './index';

const data = {
  weight: '0604kg',
  height: '065m',
  maxHP: 1070,
};

const pokemon = {
  image: 'dfsfsfs',
  name: 'Teste',
};

describe('Test for EditModal', () => {
  it('type input text', () => {
    render(<EditModal modalIsOpen pokemon={pokemon} currentData={data} />);
    const height = '999';
    const weight = '6666';
    const hp = '1000';
    const weightNode = screen.getByTestId('weight-input');
    const heightNode = screen.getByTestId('height-input');
    const hpNode = screen.getByTestId('hp-input');

    fireEvent.change(weightNode, { target: { value: weight } });
    expect(weightNode.value).toEqual(weight);

    fireEvent.change(heightNode, { target: { value: height } });
    expect(heightNode.value).toEqual(height);

    fireEvent.change(hpNode, { target: { value: hp } });
    expect(hpNode.value).toEqual(hp);
  });
});
