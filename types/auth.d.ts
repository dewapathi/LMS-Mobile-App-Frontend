type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: "student" | "teacher" | "admin";
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: string;
  };
};

type SignInFormData = {
  username: string;
  password: string;
};
