import * as types from './actions';

const initialState = {
  exercise: null,
  byId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, exercise: action.payload };

    case types.GET_BY_ID:

      const findExercise = state.exercise.filter(exer => exer.id === action.id);

      debugger
      return { ...state, byId: findExercise };

    default: return state;
  }
};

export default reducer;