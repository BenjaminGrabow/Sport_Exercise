import * as types from './actions';

const initialState = {
  exercise: null,
  byId: null,
  copyOfExercise: null,
  currentPage: 1,
  postsPerPage: 10,
  pageNumbers: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, exercise: action.payload, copyOfExercise: action.payload };

      
      case types.SHOW_CATGEGORY:
        
        let searchResultForCategory = state.copyOfExercise.filter(exer => exer.category === action.category);
        
        const indexOfLastPost = state.currentPage * state.postsPerPage;
        
        const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
        
        const currentPosts = searchResultForCategory.slice(indexOfFirstPost, indexOfLastPost);
        
        const totalPosts = searchResultForCategory.length;
        
        let pageNumbers = [];
        
        for (let i = 1; i <= Math.ceil(totalPosts / state.postsPerPage); i++) {
          pageNumbers.push(i);
        };
      
        return { ...state, exercise: currentPosts, pageNumbers: pageNumbers };
        
        case types.CLOSE_EXERCISE:
          
          return { ...state, byId: null };
          default: return state;
        }
      };
      
      export default reducer;
     
     
     // FOR CHECKBOX
      // case types.GET_BY_ID:
  
      //   const findExercise = state.exercise.filter(exer => exer.id === action.id);
  
      //   return { ...state, byId: findExercise };