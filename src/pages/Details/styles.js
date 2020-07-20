import styled from 'styled-components';

export const Header = styled.header`
  a {
    text-decoration: none;
    color: #a8a8b3;
    font-size: 20px;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-bottom: -10px;
    }
  }
`;

export const Container = styled.section`
  margin-top: 50px;
  height: 530px;
  background: white;
  padding: 15px;
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    img {
      height: 100%;
    }
  }
`;

export const Info = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  margin: 6px;
`;

export const Name = styled.p`
  display: flex;
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  color: #424242;
`;

export const Number = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: bold;
  color: #757575;
`;

export const Field = styled.p`
  display: flex;
  flex: 1;
  color: #757575;
  font-weight: 600;
  font-size: 18px;
`;

export const Value = styled.p`
  color: #424242;
  font-weight: 600;
  font-size: 18px;
`;

export const Category = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #424242;
  margin: 10px 20px;
`;

export const BoxContainer = styled.div`
  display: inline-flexbox;
  margin-left: 20px;
  margin-bottom: 6px;

  div {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 0 10px;
    border-radius: 50%;
    border: solid 3px #bf360c;
    width: 95px;
    height: 95px;

    img {
      height: 80%;
      border-radius: 20%;
    }

    h1 {
      font-size: 16px;
    }
  }
`;

export const TextBox = styled.p`
  display: flex;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 3px;
  font-size: 18px;
  background: ${(props) =>
    props.type === 'Fire'
      ? '#ef6c00'
      : props.type === 'Water' || props.type === 'Ice'
      ? '#0091ea'
      : props.type === 'Poison'
      ? '#d1c4e9'
      : props.type === 'Bug' || props.type === 'Grass'
      ? ' #aed581'
      : props.type === 'Normal'
      ? '#757575'
      : props.type === 'Fighting'
      ? '#bf360c'
      : props.type === 'Fairy' || props.type === 'Psychic'
      ? '#ea80fc'
      : props.type === 'Fighting' || props.type === 'Rock'
      ? '#9e9d24'
      : '#ffc400'};
  color: white;
`;

export const LoadView = styled.div`
  display: flex;
  height: 90%;
  align-items: center;
`;

export const EditButton = styled.button`
  margin-top: 15px;
  padding: 10px 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 95%;
  background: #bf360c;
  border-radius: 6px;
  border: 0;
  transition: 0.2s;

  &:hover {
    background: #e64a19;
  }
`;
