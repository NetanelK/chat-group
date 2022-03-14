import styled from 'styled-components';
import Button from './Button';

const InputContainer = styled.div`
  color: var(--inputText);
  background-color: var(--inputBackground);
  display: flex;
  /* fle */
  align-items: center;
  justify-content: space-between;
  border-radius: 0.44em;
  width: 70%;
  font-size: 1rem;
  padding: 0.35em;
  padding-left: 1em;

  /* & .material-icons {
    font-size: 1rem;
    background-color: rgb(var(--buttonBackground));
    border-radius: 0.44em;
    height: 2.5em;
    width: 2.5em;
    padding-top: 0.7em;
    padding-left: 0.1em;
    cursor: pointer;

    &:hover {
      background-color: rgba(var(--buttonBackground), 0.5);
    }
  } */

  & .input {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--inputText);
    flex: 0.97;

    &::placeholder {
      color: var(--inputPlaceholder);
      font-size: 0.77rem;
    }
  }
`;

const Input = (props) => {
  const enterPressedHandler = (event) => {
    event.target.value.length > 0 &&
      event.key === 'Enter' &&
      props.onSubmit(event.target);
  };

  const clickHandler = (event) => {};

  return (
    <InputContainer>
      <input
        className="input"
        onKeyDown={enterPressedHandler}
        {...props.input}
      />

      {props.icon && (
        <Button onClick={props.onSubmit}>
          <span className={`material-icons md-18`}>{props.icon.name}</span>
        </Button>
      )}
    </InputContainer>
  );
};

export default Input;
