import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";
import React from "react";
import { gradients } from "styles/vars";

export const GradientButton: React.FC<ButtonProps> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      sx={{
        backgroundImage: gradients.primary,
        "&.Mui-disabled": {
          cursor: "not-allowed",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
