import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { colors } from "styles/vars";

// export const
export const CustomTextField = styled(TextField)({
  marginTop: 0,
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    marginTop: 0,
    borderRadius: "10px",
    paddingRight: "8px",
    "&.Mui-disabled": {
      backgroundColor: colors.lightGray,
    },
    "&.Mui-disabled fieldset": {
      borderColor: "rgba(15, 23, 42, 0.26)",
    },
    "& fieldset": {
      border: `1px solid ${colors.mediumDarkGray}`,
    },
    "&:hover fieldset": {
      borderColor: colors.colorBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.colorBlue,
      borderWidth: "1px",
    },
    "&.Mui-error fieldset": {
      borderColor: colors.error,
    },
    "& .MuiInputBase-input": {
      padding: "12px 15px",
      paddingRight: "10px",
      height: "auto",
      fontSize: "15px",
      color: colors.colorBack,
      "&.Mui-disabled": {
        "-webkit-text-fill-color": "rgba(15, 23, 42, 0.38)",
      },
    },
    "& .MuiInputBase-input[type=number]::-webkit-inner-spin-button, .MuiInputBase-input[type=number]::-webkit-inner-spin-button":
      {
        webkitAppearance: "none",
        mozAppearance: "none",
        appearance: "none",
        margin: 0,
      },
  },
  "& .MuiFormLabel-root": {
    color: colors.darkGray,
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.3px",
    transform: "translate(18px, 14px) scale(1)",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    transform: "translate(14px, -7px) scale(0.85)",
    color: colors.colorBlue,
  },
  "& .MuiFormLabel-root.MuiFormLabel-filled": {
    transform: "translate(14px, -7px) scale(0.85)",
  },
  "& .MuiFormLabel-root.Mui-error": {
    color: colors.error,
  },
  "& .MuiFormHelperText-root": {
    marginTop: "0px",
    marginLeft: "15px",
    fontWeight: 500,
    fontSize: "14px",
    color: `${colors.error} !important`,
  },
});
