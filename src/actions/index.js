import _ from 'lodash';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: _.uniqueId(),
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
