import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 45px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid white;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53830;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 70px;
    width: 250px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: white;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53830;
  margin-top: 8px;
`;

export const ItemsContainer = styled.div`
  margin-top: 80px;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
`;
