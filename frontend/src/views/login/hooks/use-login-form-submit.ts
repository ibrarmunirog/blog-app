import { ILoginFormInitialValues } from "views/login/interfaces";
import { FormikHelpers } from "formik";

const initialValues: ILoginFormInitialValues = {
  email: "",
  password: "",
};

interface IUseLoginFormSubmit {
  initialValues: ILoginFormInitialValues;
  onSubmit: (
    values: ILoginFormInitialValues,
    actions: FormikHelpers<ILoginFormInitialValues>
  ) => void;
}

export const useLoginFormSubmit = (): IUseLoginFormSubmit => {
  const onSubmit = (
    values: ILoginFormInitialValues,
    actions: FormikHelpers<ILoginFormInitialValues>
  ) => {
    console.log(values, "hhh");
  };
  return {
    initialValues,
    onSubmit,
  };
};
