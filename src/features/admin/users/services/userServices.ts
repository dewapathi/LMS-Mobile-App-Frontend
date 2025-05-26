import api from '../../../../core/api/axios';
import {CreateUserFormValues} from '../../../../schemas/user.schema';

export const userServices = {
  getAllUsers: async () => {
    return await api.get('users/');
  },
  createUser: async (data: CreateUserFormValues) => {
    console.log('datadatadatadatadatadatadata', data);
    
    const res = await api.post('users/', data);
    console.log('1111111111111111', res);

    return res;
  },
};
