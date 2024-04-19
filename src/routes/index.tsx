import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import AuthPage from "../pages/auth";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
