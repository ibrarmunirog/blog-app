import { Routes as Router, Route } from "react-router-dom";
import { Layout } from "shared/layout";
import { Login, Register } from "views";

export const Routes = () => {
  return (
    <Router>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        {/* catch all */}
        <Route path="*" element={<p>Missing Route</p>} />
      </Route>
    </Router>
  );
};
