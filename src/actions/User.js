import types from '../action_types';

const addUsers = data => dispatch => {
	dispatch({ type: types.ADD_USER, payload: { data } });
}

export { addUsers }