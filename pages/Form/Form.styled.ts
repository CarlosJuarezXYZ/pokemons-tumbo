import styled from "styled-components";

const FormPokemon = styled.form`
  width: 80%;
  min-width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  & p {
    color: red;
    font-size: 0.8em;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  & label {
    display: block;
    margin-bottom: 5px;
  }
  & input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  & button[type="button"] {
    background-color: #ccc;
  }
  & button[type="submit"] {
    background-color: #4caf50;
    color: white;
  }
`;

export const FormStyled = {
  FormPokemon,
  FormGroup,
  FormButtons,
};
