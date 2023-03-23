import * as Yup from "yup";

export const useLoginFormSchema = (): Yup.AnyObject => {
  return Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password must be 8 characters long"),
  });
};
