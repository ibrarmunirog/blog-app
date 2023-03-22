import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors, gradients } from "styles/vars";
import { RegistrationForm } from "views/register/components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Loader, LoginRegisterImage, ToastAlert } from "shared/components";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "modules/auth";
import { authResetError } from "modules/auth/auth.slice";
import { AppDispatch } from "redux/store";

export const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector(authSelector);

  console.log(error, "errorrrrrr");

  return (
    <>
      <Loader open={loading} />
      <ToastAlert
        onClose={() => dispatch(authResetError())}
        autoHideDuration={200}
        severity="error"
        message={error?.message}
        open={Boolean(error?.message)}
      />
      <Card
        sx={{
          width: "85vw",
          margin: { xs: "20px auto", md: "40px auto" },
          "& .MuiCardContent-root": {
            paddingBottom: "0 !important",
          },
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Grid container>
            <Grid item flexGrow={1} xs={12} md={6}>
              <LoginRegisterImage />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: { xs: "1rem", md: "4rem 0" },
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
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
