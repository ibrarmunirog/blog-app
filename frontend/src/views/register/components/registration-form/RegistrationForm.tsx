import { GradientButton, InputField } from "shared/components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { usePassword } from "shared/hooks";
import { useFormik } from "formik";
import {
  useRegisterFormSubmit,
  useRegisterSormSchema,
} from "views/register/hooks";
import { isError, isErrorMessage } from "shared/utils";

export const RegistrationForm = () => {
  const registerFormSchema = useRegisterSormSchema();
  const {
    showConfirmPassword,
    showPassword,
    handleClickShowConfirmPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = usePassword();
  const { initialValues, onSubmit } = useRegisterFormSubmit();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    isValid,
    isSubmitting,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema: registerFormSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      sx={{
        padding: { xs: "0 30px", md: "0 40px" },
      }}
      onSubmit={handleSubmit}
    >
      <InputField
        fullWidth
        id="firstName"
        label="Frist Name"
        variant="outlined"
        helperText={isErrorMessage("firstName", errors)}
        error={isError("firstName", errors, touched)}
        {...getFieldProps("firstName")}
      />
      <InputField
        fullWidth
        label="Last Name"
        variant="outlined"
        helperText={isErrorMessage("lastName", errors)}
        error={isError("lastName", errors, touched)}
        {...getFieldProps("lastName")}
      />
      <InputField
        fullWidth
        label="Email"
        variant="outlined"
        helperText={isErrorMessage("email", errors)}
        error={isError("email", errors, touched)}
        {...getFieldProps("email")}
      />
      <InputField
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Password"
        variant="outlined"
        helperText={isErrorMessage("password", errors)}
        error={isError("password", errors, touched)}
        {...getFieldProps("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ marginRight: "1px" }}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <InputField
        fullWidth
        type={showConfirmPassword ? "text" : "password"}
        label="Confirm Password"
        variant="outlined"
        helperText={isErrorMessage("confirmPassword", errors)}
        error={isError("confirmPassword", errors, touched)}
        {...getFieldProps("confirmPassword")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ marginRight: "1px" }}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <GradientButton
        variant="contained"
        fullWidth
        type="submit"
        sx={{ marginBottom: { xs: "13px", md: "28px" } }}
        disabled={!(isValid && dirty) || isSubmitting}
      >
        Submit
      </GradientButton>
    </Box>
  );
};
