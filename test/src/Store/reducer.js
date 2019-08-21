import * as types from './actions';

const initialState = {
  exercise: null,
  byId: null,
  copyOfExercise: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, exercise: action.payload, copyOfExercise: action.payload };

    case types.GET_BY_ID:

      const findExercise = state.exercise.filter(exer => exer.id === action.id);

      return { ...state, byId: findExercise };

      case types.GET_BY_CATGEGORY:

          const findCategory = state.copyOfExercise.filter(exer => exer.category.toLowerCase() === action.category);
    
          return { ...state, exercise: findCategory };

    default: return state;
  }
};

export default reducer;