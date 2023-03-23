import { Outlet } from "react-router-dom";
import { Navigation } from "shared/layout";
import Box from "@mui/material/Box";
import { colors } from "styles/vars";

export const Layout = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: colors.gray,
      }}
    >
      <Navigation />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <footer>Footer</footer>
    </Box>
  );
};
