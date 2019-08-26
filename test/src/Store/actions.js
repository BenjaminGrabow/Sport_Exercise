import axios from 'axios';

export const FETCH_EXERCISES = 'FETCH_EXERCISES';
export const GET_EXERCISE = 'GET_EXERCISE';
export const SHOW_CATGEGORY = 'SHOW_CATEGORY';
export const CLOSE_EXERCISE = 'CLOSE_EXERCISE';
export const PAGINATE = 'PAGINATE';

const exercises = 'http://localhost:5000/exercises';

export const fetchExercises = () => dispatch => {
  return axios.get(exercises)
    .then(res => {
      
      dispatch({ type: FETCH_EXERCISES, payload: res.data });
    })
    .catch(err => {
      
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