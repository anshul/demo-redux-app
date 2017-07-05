// import _ from 'lodash';

// const getLocalstorageTodos = localStorage.getItem('state');

// const localTodos = JSON.parse(getLocalstorageTodos);

// const initialState = localTodos.todos.todos || [];
// console.log(initialState);

// const initialState = [
//   {
//     id: _.uniqueId(),
//     text: 'watch india vs south africa',
//     completed: false,
//   },
//   {
//     id: _.uniqueId(),
//     text: 'lunch',
//     completed: true,
//   },
//   {
//     id: _.uniqueId(),
//     text: 'Afternoon sleep',
//     completed: true,
//   },
// ];

// console.log(initialState);
const initialState = [];

const todos = (state = initialState || [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const TodoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
});

export default TodoApp;
