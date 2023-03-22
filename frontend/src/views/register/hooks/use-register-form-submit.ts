import { IRegisterFormInitialValues } from "views/register/interfaces";
import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { registerAction } from "modules/auth";

const initialValues: IRegisterFormInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface IUseRegisterFormSubmit {
  initialValues: IRegisterFormInitialValues;
  onSubmit: (
    values: IRegisterFormInitialValues,
    actions: FormikHelpers<IRegisterFormInitialValues>
  ) => Promise<void>;
}

export const useRegisterFormSubmit = (): IUseRegisterFormSubmit => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = async (
    values: IRegisterFormInitialValues,
    { setSubmitting }: FormikHelpers<IRegisterFormInitialValues>
  ) => {
    console.log(values, "hhdhhdh");
    const result = await dispatch(registerAction(values));

    if (result.type === registerAction.rejected.toString()) {
      setSubmitting(false);
    }
  };

  return {
    initialValues,
    onSubmit,
  };
};
