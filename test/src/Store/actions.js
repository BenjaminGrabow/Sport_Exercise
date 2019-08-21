import axios from 'axios';

export const START = 'START';
// export const GET_BY_ID = 'GET_BY_ID';
export const SHOW_CATGEGORY = 'SHOW_CATEGORY';
export const CLOSE_EXERCISE = 'CLOSE_EXERCISE';

const adress = 'http://localhost:3500/';

export const start = () => dispatch => {
  return axios.get(adress)
    .then(res => {
      debugger
      dispatch({ type: START, payload: res.data });
    })
    .catch(err => {
      debugger
    })
};


// export const getById = (id) => {
//   return { type: GET_BY_ID, id: id }; 
// };

export const showCategory = (category) => {
  return { type: SHOW_CATGEGORY, category: category };   
};

export const closeExercise = (category) => {
  return { type: CLOSE_EXERCISE };   
};