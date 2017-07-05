import types from '../action_types';

const initialState = {
  users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      return [
        ...state.users,
        {
          name: action.payload.data.name,
          surname: action.payload.data.surname,
          age: action.payload.data.age,
          gender: action.payload.data.gender,
        },
      ];
    }

    default:
      return state;
  }
}
