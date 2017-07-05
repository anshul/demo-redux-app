import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTodo } from './../../actions';
import VisibleTodoList from './VisibleTodoList';
import TodoFooter from './TodoFooter';
import s from './styles';

const AddTodo = props => {
  let input;

  const handleTodo = e => {
    e.preventDefault();
    if (input.value.length > 0) {
      props.addTodo(input.value);
      input.value = '';
    }
  };

  return (
    <div>
      {props.users.length > 0
        ? props.users.map((user, index) =>
            <div key={user.name}>
              <h2>
                Add {user.name} Todo
              </h2>
              <s.AddTodo>
                <form onSubmit={handleTodo}>
                  <input
                    type="text"
                    ref={node => {
                      input = node;
                    }}
                    placeholder="Add a todo..."
                  />
                  <br />
                  <button type="submit">
                    <i className="fa fa-plus" style={{ fontSize: '36px' }} />
                  </button>
                </form>
              </s.AddTodo>
              <VisibleTodoList />
              <TodoFooter />
            </div>,
          )
        : <Link to="/add-user">Add User</Link>}
    </div>
  );
};

AddTodo.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.arrayOf(['Male', 'Female']),
    }).isRequired,
  ).isRequired,
};

const selector = state => ({
  users: state.config.users,
  todos: state.config.todos,
});

export default connect(selector, { addTodo })(AddTodo);
