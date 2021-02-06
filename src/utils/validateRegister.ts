import { SignUpInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: SignUpInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Length must be greater than 2",
      },
    ];
  }
  if (options.email.length <= 2) {
    return [
      {
        field: "email",
        message: "Must be Valid Email",
      },
    ];
  }

  if (options.password.length <= 3) {
    return [
      {
        field: "password",
        message: "Length must be greater than 3",
      },
    ];
  }
  return null;
};
