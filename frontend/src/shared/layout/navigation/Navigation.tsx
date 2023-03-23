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
import { useSelector } from "react-redux";
import { authSelector } from "modules/auth";
import { UserAvatarMenu } from "shared/components";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "shared/constants";
import { Link } from "react-router-dom";

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
  const { user } = useSelector(authSelector);
  const [value, setValue] = useState(0);

  const navbarRightElement = user ? (
    <UserAvatarMenu />
  ) : (
    <Stack spacing={2} direction="row">
      <LoginButton to={LOGIN_ROUTE}>Login</LoginButton>
      <RegisterButton to={REGISTER_ROUTE}>Register</RegisterButton>
    </Stack>
  );

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
            <Link to={HOME_ROUTE}>
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 120,
                  objectFit: "contain",
                }}
                alt="The Logo"
                src={logoSrc}
              />
            </Link>
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
            {navbarRightElement}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
