import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
// Images
import LogoImg from "../assets/logo.svg";

const Preloader = ({ show }: any) => {
  return (
    <div
      className={`relative ${
        show
          ? "flex flex-col justify-center items-center z-50 min-h-screen top-[-50px] min-w-full"
          : "hidden"
      }`}
    >
      <Box className="flex flex-col items-center justify-center">
        <img src={LogoImg} alt="جمشید" className="w-[100px]" />
        <Typography
          component={"h2"}
          fontSize={28}
          fontWeight={700}
          color={"white"}
        >
          جم‌شید
        </Typography>
        <Typography
          component={"p"}
          fontSize={18}
          fontWeight={300}
          color={"#A6A6CB"}
        >
          بگو بیان،جم شید بریم{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          position: "absolute",
          bottom: "20px",
        }}
      >
        <Typography
          component={"p"}
          fontSize={18}
          fontWeight={300}
          color={"#A6A6CB"}
        >
          درحال اتصال
        </Typography>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Preloader;
