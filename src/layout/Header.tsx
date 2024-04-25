import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

// Images
import LogoImg from "../assets/logo.svg";

// Icons
import { LuSearch } from "react-icons/lu";
import { MdOutlineNotificationImportant } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between p-6 text-white">
      <Link to={"/"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          <img src={LogoImg} width={38} height={38} />
          <div className="flex flex-col justify-center gap-2 mt-1">
            <Typography variant="h3" fontSize={14} fontWeight={700}>
              جم‌شید
            </Typography>
            <Typography variant="body1" fontSize={10} color={"#A6A6CB"}>
              بگو بیان،جم شید بریم
            </Typography>
          </div>
        </Box>
      </Link>
      <div className="flex justify-center items-center gap-4 border border-[#4C4C72] py-2 px-3 rounded-lg">
        <Link to="/search">
          <LuSearch fontSize={22} />
        </Link>
        <Link to="/notifications">
          <MdOutlineNotificationImportant fontSize={22} />
        </Link>
        <Link to="/profile">
          <Avatar sx={{ borderRadius: "8px", padding:"0px",width:"40px",height:"40px" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
