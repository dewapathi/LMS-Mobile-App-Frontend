import axios from 'axios';
import {store} from '../store/store';
import type {RootState} from '../store/store';

const api = axios.create({baseURL: 'http://192.168.8.102:8000/api/'});

api.interceptors.request.use(config => {
  const state = store.getState() as RootState;
  const token = state.auth.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['x-api-key'] = '123';
  return config;
});

export default api;
