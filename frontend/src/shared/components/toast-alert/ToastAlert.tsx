import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";

export interface IToastAlert extends SnackbarProps {
  message?: string;
  error?: any | null;
  severity?: AlertColor;
  onClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export const ToastAlert: React.FC<IToastAlert> = ({
  severity,
  message,
  onClose,
  ...rest
}) => {
  return (
    <Snackbar
      {...rest}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity={severity} sx={{ width: "100%" }} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
