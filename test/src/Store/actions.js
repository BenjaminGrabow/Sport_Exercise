import axios from 'axios';

export const START = 'START';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_BY_CATGEGORY = 'GET_BY_CATEGORY';

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


export const getById = (id) => {
  return { type: GET_BY_ID, id: id }; 
};

export const getByCategory = (category) => {
  return { type: GET_BY_CATGEGORY, category: category };   
};