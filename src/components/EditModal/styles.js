import styled from 'styled-components';

export const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'solid 4px #bf360c',
    borderRadius: 8,
  },
};

export const CardContent = styled.form`
  width: 350px;
  height: 400px;
  background: white;
  margin: 10px;
  align-items: center;
  margin-bottom: 60px;
  border-radius: 10px;

  #imgView {
    display: flex;
    background: white;
    height: 140px;
    width: 140px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    #img {
      height: 100%;
      border-radius: 30%;
      transition: 0.2s;
      object-fit: cover;
    }
  }

  #cardHead {
    display: flex;
    width: 90%;
    margin: 20px;

    #name {
      font-size: 26px;
      font-weight: bold;
      color: #424242;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 10px 0;

  p {
    display: flex;
    flex: 1;
    color: #546e7a;
    padding-left: 10px;
    font-weight: 600;
    display: block;
    font-size: 20px;
  }

  input {
    width: 60px;
    color: #37474f;
    padding: 5px 10px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }
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
