import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-13398.firebaseio.com/'
});

export default instance;