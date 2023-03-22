import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { LoginRegisterImage } from "shared/components";
import { colors, gradients } from "styles/vars";
import { LoginForm } from "views/login/components";

export const Login = () => {
  return (
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
          <Grid item flexGrow={1} xs={12} md={6}>
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
                Login
              </Typography>
            </Box>
            <LoginForm />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
