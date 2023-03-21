import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import logoSrc from "assets/images/logo.png";
import { LoginButton, RegisterButton } from "./navigation.styles";
import { colors, fontWeights } from "styles/vars";

const linkItemStyles = {
  fontWeight: fontWeights.fontMedium,
  fontSize: "17px",
};

const bottomNavigationStyles = {
  "& > .MuiBottomNavigationAction-label": {
    color: `${colors.colorBack} !important`,
    ...linkItemStyles,
    "&.Mui-selected": {
      color: `${colors.colorBlue} !important`,
      ...linkItemStyles,
    },
  },
};

export const Navigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: colors.colorWhite,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                height: 40,
                width: 220,
                objectFit: "contain",
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The Logo"
              src={logoSrc}
            />
            <BottomNavigation
              sx={{ gap: { md: "44px" } }}
              showLabels
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                sx={bottomNavigationStyles}
                label="Home"
              />
              <BottomNavigationAction
                sx={bottomNavigationStyles}
                label="Categories"
              />

              <BottomNavigationAction
                sx={bottomNavigationStyles}
                label="Bookmarks"
              />
            </BottomNavigation>
            <Box sx={{ flexGrow: 1 }} />
            <Stack spacing={2} direction="row">
              <LoginButton to="/login">Login</LoginButton>
              <RegisterButton to="/register">Register</RegisterButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
