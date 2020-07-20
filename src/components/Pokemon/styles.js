import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  height: 320px;
  margin-bottom: 80px;

  a {
    text-decoration: none;
  }
`;

export const CardContent = styled.div`
  width: 250px;
  height: 310px;
  background: white;
  margin: 10px;
  align-items: center;
  margin-bottom: 60px;
  border-radius: 10px;
  transition: 0.2s;
  border: solid transparent 4px;

  &:hover {
    border: solid #dd2c00 4px;
  }

  &:hover > div #img {
    transform: scale(1.11);
  }

  #imgView {
    display: flex;
    margin-top: -65px;
    background: white;
    height: 140px;
    width: 140px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    #img {
      height: 65%;
      border-radius: 30%;
      transition: 0.2s;
      object-fit: cover;
    }
  }

  #cardHead {
    display: flex;
    width: 90%;
    margin-top: 10px;
    justify-content: space-between;

    #name {
      display: flex;
      flex: 1;
      font-size: 22px;
      font-weight: bold;
      color: #424242;
    }

    #number {
      font-size: 20px;
      font-weight: bold;
      color: #757575;
    }
  }
`;

export const BoxContainer = styled.div`
  display: inline-flexbox;
  margin: 8px 10px;
`;

export const TextBox = styled.p`
  display: flex;
  padding: 3px 6px;
  margin-right: 6px;
  border-radius: 3px;
  background: ${(props) =>
    props.type === 'Fire'
      ? '#ef6c00'
      : props.type === 'Water'
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
      : props.type === 'Fighting'
      ? '#9e9d24'
      : '#ffc400'};
  color: white;
`;

export const Row = styled.div`
  display: flex;
  font-size: 17px;
  margin: 10px 0;

  #field {
    display: flex;
    flex: 1;
    color: #546e7a;
    padding-left: 10px;
    font-weight: 600;
    display: block;
  }

  #value {
    color: #37474f;
    font-weight: 600;
    padding-right: 10px;
  }
`;
