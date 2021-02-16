import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const postGame = body => axios.post('/games', { ...body });

export const getGame = (id = 123) => axios.get(`/games/${id}`);

export const createCollection = data => axios.post('/collections', { ...data });

export const getCollections = () => axios.get('/collections');
