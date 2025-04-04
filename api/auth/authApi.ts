import axiosClient from "../axiosClient";

export const authApi = {
  signUp: (data: SignUpFormData) => {    
    return axiosClient.post("sign-up/", {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password,
      role: data.role,
      address: data.address,
    });
  },

  signIn: (data: SignInFormData) => {
    return axiosClient.post("sign-in/", {
      username: data.username,
      password: data.password
    })
  }
};
