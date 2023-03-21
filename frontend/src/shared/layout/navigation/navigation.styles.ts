import { styled } from "@mui/material/styles";
import { colors, fontWeights, gradients } from "styles/vars";
import { Link } from "react-router-dom";

export const LoginButton = styled(Link)({
  backgroundImage: gradients.primary,
  minWidth: "64px",
  padding: "8px 16px",
  borderRadius: "4px",
  color: colors.colorWhite,
  textDecoration: "none",
  fontFamily: "Montserrat",
  fontWeight: fontWeights.fontMedium,
});

export const RegisterButton = styled(Link)({
  color: colors.colorBlue,
  minWidth: "64px",
  padding: "8px 16px",
  borderRadius: "4px",
  textDecoration: "none",
  fontFamily: "Montserrat",
  fontWeight: fontWeights.fontMedium,
  border: `1px solid ${colors.colorBlue}`,
});
