import { connect } from 'react-redux';
import { toggleTodo } from './../../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  const { todos, visibilityFilter } = state.config.todos;
  return {
    todos: getVisibleTodos(todos, visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
