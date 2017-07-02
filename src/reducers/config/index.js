import types from '../../action_types';

const initialState = {
  Users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      const Users = [
        ...state.Users,
        {
          name: action.payload.data.name,
          surname: action.payload.data.surname,
          age: action.payload.data.age,
          gender: action.payload.data.gender,
        },
      ];

      return Object.assign({}, state, { Users });
    }

    default:
      return state;
  }
}
