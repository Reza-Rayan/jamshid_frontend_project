import { Routes, Route } from "react-router-dom";

// Pages
import AuthPage from "../pages/auth";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Explore from "../pages/Explore";
import Articles from "../pages/Articles";
import Event from "../pages/Event";
import Shop from "../pages/Shop";
import Profile from "../pages/Profile";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
