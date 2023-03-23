import { IRegisterFormInitialValues } from "views/register/interfaces";
import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { registerAction } from "modules/auth";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "shared/constants";

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
  const navigate = useNavigate();

  const onSubmit = async (
    values: IRegisterFormInitialValues,
    { setSubmitting }: FormikHelpers<IRegisterFormInitialValues>
  ) => {
    const result = await dispatch(registerAction(values));

    if (result.type === registerAction.rejected.toString()) {
      setSubmitting(false);
    }

    if (result.type === registerAction.fulfilled.toString()) {
      navigate(HOME_ROUTE);
    }
  };

  return {
    initialValues,
    onSubmit,
  };
};
