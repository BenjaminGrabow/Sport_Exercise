import * as types from './actions';

const initialState = {
  exercises: null,
  singleExercise: null,
  copyOfExercises: null,
  currentPage: 1,
  postsPerPage: 10,
  pageNumbers: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, exercises: action.payload, copyOfExercises: action.payload };

      case types.SHOW_CATGEGORY:
        let searchResultForCategory = state.copyOfExercises.filter(exer => exer.category === action.category);
        // SEARCH THE CLICKED CATEGORY
        
        const indexOfLastPost = state.currentPage * state.postsPerPage;
        
        const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
        
        const currentPosts = searchResultForCategory.slice(indexOfFirstPost, indexOfLastPost);
        
        // GET THE CURRENT EXERCISES FROM THE CATEGORY (BUT ONLY SPECIFIC AMOUNT FOR PAGINATION ) 

        const totalPosts = searchResultForCategory.length;
        
        // PAGENUMBERS KEEPS TRACK OF THE NUMBER OF BUTTONS
        // WE NEED FOR CURRENT AMOUNT OF EXERCISES FOR THE CATEGORY
        let pageNumbers = [];
        
        for (let i = 1; i <= Math.ceil(totalPosts / state.postsPerPage); i++) {
          pageNumbers.push(i);
        };
      
        return { ...state, exercises: currentPosts, pageNumbers: pageNumbers };
        
        
         case types.GET_EXERCISE:
     
           const findExercise = state.exercises.filter(exer => exer.id === action.id);
     
           return { ...state, singleExercise: findExercise };

        case types.CLOSE_EXERCISE:
          
          return { ...state, singleExercise: null };
        
          case types.PAGINATE:

              const indexOfTheLastPost = action.num * state.postsPerPage;
        
              const indexOfTheFirstPost = indexOfTheLastPost - state.postsPerPage;
              
              const theCurrentPosts = state.copyOfExercises.slice(indexOfTheFirstPost, indexOfTheLastPost);
              
              return { ...state, exercises: theCurrentPosts };
              
          default: return state;
        }
      };
      
      export default reducer;
     