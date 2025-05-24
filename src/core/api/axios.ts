import axios from 'axios';
import {store} from '../store/store';
import type {RootState} from '../store/store';
import {mapKeys, snakeCase, isPlainObject, isArray} from 'lodash';

// Utility to deeply convert camelCase to snake_case
const toSnakeCaseDeep = (obj: any): any => {
  if (isArray(obj)) {
    return obj.map(toSnakeCaseDeep);
  } else if (isPlainObject(obj)) {
    const converted: any = {};
    Object.keys(obj).forEach(key => {
      const newKey = snakeCase(key);
      converted[newKey] = toSnakeCaseDeep(obj[key]);
    });
    return converted;
  }
  return obj;
};

const api = axios.create({baseURL: 'http://192.168.8.102:8000/api/'});

api.interceptors.request.use(config => {
  const state = store.getState() as RootState;
  const token = state.auth.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['x-api-key'] = '123';

  if (config.data) {
    config.data = toSnakeCaseDeep(config.data);
  }
  return config;
});

export default api;
