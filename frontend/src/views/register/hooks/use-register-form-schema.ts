import * as Yup from "yup";

const passwordRegex = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];

const validatePassword = (value: string) =>
  passwordRegex.every((pattern) => pattern.test(value));

export const useRegisterSormSchema = (): Yup.AnyObject => {
  return Yup.object().shape({
    firstName: Yup.string().required("Frist Name is required!"),
    lastName: Yup.string().required("Last Name is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .required()
      .min(8, "Password must be 8 characters long")
      .test(
        "passwordValidation",
        "Password must include lower, upper, number, and special characters",
        validatePassword
      ),
    confirmPassword: Yup.string()
      .required("Password is required!")
      .oneOf([Yup.ref("password")], "Please make sure your password match")
      .test(
        "passwordValidation",
        "Password must include lower, upper, number, and special characters",
        validatePassword
      ),
  });
};
