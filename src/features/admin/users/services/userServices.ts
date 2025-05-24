import api from '../../../../core/api/axios';

export const userServices = {
  getAllUsers: async () => {
    const res = await api.get('users/');
    return res;
  },
};
