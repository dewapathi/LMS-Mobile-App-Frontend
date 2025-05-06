import api from '../../../core/api/axios';

export const authServices = {
  login: async (credintials: {username: string; password: string}) => {    
    const response = await api.post('sign-in/', credintials);    
    return response.data;
  },
  register: async () => {},
};
