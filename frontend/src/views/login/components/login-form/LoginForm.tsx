import { GradientButton, InputField } from "shared/components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { usePassword } from "shared/hooks";
import { useFormik } from "formik";
import { isError, isErrorMessage } from "shared/utils";
import { useLoginFormSchema, useLoginFormSubmit } from "views/login/hooks";

export const LoginForm = () => {
  const loginFormSchema = useLoginFormSchema();
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    usePassword();
  const { initialValues, onSubmit } = useLoginFormSubmit();
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues,
    validationSchema: loginFormSchema,
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
      <GradientButton
        type="submit"
        variant="contained"
        fullWidth
        sx={{ marginBottom: { xs: "13px", md: "28px" } }}
      >
        Submit
      </GradientButton>
    </Box>
  );
};
