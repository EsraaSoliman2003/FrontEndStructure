import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../features/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      {/* Global Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />

      {/* Protected Pages */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* Error Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
