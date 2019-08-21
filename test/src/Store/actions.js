import axios from 'axios';

export const START = 'START';
export const GET_EXERCISE = 'GET_EXERCISE';
export const SHOW_CATGEGORY = 'SHOW_CATEGORY';
export const CLOSE_EXERCISE = 'CLOSE_EXERCISE';
export const PAGINATE = 'PAGINATE';

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

export const getExercise = (id) => {
  return { type: GET_EXERCISE, id: id }; 
};

export const showCategory = (category) => {
  return { type: SHOW_CATGEGORY, category: category };   
};

export const closeExercise = () => {
  return { type: CLOSE_EXERCISE };   
};

export const paginate = (num) => {
  return { type: PAGINATE, num: num };   
};