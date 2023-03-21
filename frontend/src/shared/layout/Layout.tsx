import { Outlet } from "react-router-dom";
import { Navigation } from "shared/layout";

export const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};
