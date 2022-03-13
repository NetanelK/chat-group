import styled from 'styled-components';

const Button = styled.button`
  color: var(--buttonText);
  background-color: rgb(var(--buttonBackground));
  /* font-size: 1rem; */
  border: none;
  border-radius: 0.45em;
  line-height: 1em;
  width: 2.5em;
  height: 2.5em;
  padding: 0px;
  cursor: pointer;

  transition: background-color 0.5s ease-in;

  &:hover {
    background-color: rgba(var(--buttonBackground), 0.8);
  }
`;

export default Button;
