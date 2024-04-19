import { Routes, Route } from "react-router-dom";

// Pages
import AuthPage from "../pages/auth";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
