import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  height: 370px;
  margin-bottom: 60px;
  a {
    div {
      display: flex;
      width: 250px;
      height: 350px;
      background: white;
      margin: 10px;
      margin-bottom: 60px;
      justify-content: center;
      border-radius: 20px;
      transition: 0.2s;
      border: solid transparent 4px;

      &:hover {
        border: solid #00b8d4 4px;
      }

      &:hover > #imgContent {
        transform: scale(1.15);
        border: solid transparent 4px;
      }
    }

    #imgContent {
      margin-top: -60px;
      background: white;
      height: 140px;
      width: 140px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        height: 70%;
        width: 70%;
      }
    }
  }
`;
