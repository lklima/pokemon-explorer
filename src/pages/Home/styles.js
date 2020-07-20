import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #3a3a3a;
  max-width: 450px;
`;

export const Logo = styled.img`
  width: 160px;
`;

export const Search = styled.div`
  margin-top: 40px;
  max-width: 800px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid white;
    border-right: 0;
    font-size: 22px;

    &::placeholder {
      color: #a8a8b3;
      font-size: 22px;
    }
  }

  button {
    height: 64px;
    width: 150px;
    background: #dd2c00;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: white;
    font-size: 22px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#dd2c00')};
    }
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 80px;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
`;
