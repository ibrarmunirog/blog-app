import { Outlet } from "react-router-dom";
import { Navigation } from "shared/layout";
import Box from "@mui/material/Box";

export const Layout = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navigation />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <footer>Footer</footer>
    </Box>
  );
};
