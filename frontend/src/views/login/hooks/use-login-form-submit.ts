import { ILoginFormInitialValues } from "views/login/interfaces";
import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { loginAction } from "modules/auth";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "shared/constants";

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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = async (
    values: ILoginFormInitialValues,
    { setSubmitting }: FormikHelpers<ILoginFormInitialValues>
  ) => {
    const result = await dispatch(loginAction(values));

    if (result.type === loginAction.rejected.toString()) {
      setSubmitting(false);
    }

    if (result.type === loginAction.fulfilled.toString()) {
      navigate(HOME_ROUTE);
    }
  };
  return {
    initialValues,
    onSubmit,
  };
};
