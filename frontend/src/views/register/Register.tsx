import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { RegisterContainer } from "views/register/register.styles";
import registerBannerSrc from "assets/images/register.jpg";
import { colors, gradients } from "styles/vars";
import { RegistrationForm } from "views/register/components";

export const Register = () => {
  return (
    <RegisterContainer container>
      <Grid xs={12} md={6}>
        <Box
          component="img"
          sx={{
            objectFit: "cover",
            height: "100%",
            maxWidth: "100%",
            borderRadius: "5px",
          }}
          alt="The Blog Banner"
          src={registerBannerSrc}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5rem 0",
          }}
        >
          <Typography
            sx={{
              backgroundColor: colors.colorBlue,
              backgroundImage: gradients.primary,
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
            variant="h3"
            component="h2"
          >
            Register
          </Typography>
        </Box>
        <RegistrationForm />
      </Grid>
    </RegisterContainer>
  );
};
