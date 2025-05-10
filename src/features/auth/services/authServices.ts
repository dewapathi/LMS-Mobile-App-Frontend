import api from '../../../core/api/axios';
import {RegisterFormData} from '../../../schemas';

export const authServices = {
  login: async (credintials: {username: string; password: string}) => {
    const response = await api.post('sign-in/', credintials);
    return response.data;
  },
  register: async (data: RegisterFormData) => {
    const response = await api.post('sign-up/', data);    
    return response.data;
  },
};
