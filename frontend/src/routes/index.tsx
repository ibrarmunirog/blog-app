import { Routes as Router, Route } from "react-router-dom";
import { Layout } from "shared/layout";
import { Home, Login, Register } from "views";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* catch all */}
        <Route path="*" element={<p>Missing Route</p>} />
      </Route>
    </Router>
  );
};
