import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Search from "../pages/Search";
import AuthPage from "../pages/auth";
import Explore from "../pages/Explore";
import Articles from "../pages/Articles";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
