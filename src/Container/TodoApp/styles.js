import styled from 'styled-components';

const styles = {};

styles.TodoApp = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 520px;
  padding: 20px;
`;

styles.AddTodo = styled.div`
  text-align: center;
  margin-top: 1em;
  display:flex;
  input {
    display: block;
    border: 0;
    background: $white;
    font-size: 1.2em;
    padding: 0.5em;
    width: 100%;
    box-shadow: $box-shadow;
    transition: $transition;
    &:hover {
      box-shadow: $box-shadow-hover;
    }
`;

export default styles;
