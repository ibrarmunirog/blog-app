import { Routes as Router, Route } from "react-router-dom";
import { Layout } from "shared/layout";
import { Login, Register } from "views";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<h3>Home Page</h3>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* catch all */}
        <Route path="*" element={<p>Missing Route</p>} />
      </Route>
    </Router>
  );
};
