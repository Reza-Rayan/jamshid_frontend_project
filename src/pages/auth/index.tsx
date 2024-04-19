import { Box, Typography } from "@mui/material";

// Custom Components
import Veil from "../../components/Veil";
import PhoneInput from "../../templates/PhoneInput";
import CButton from "../../templates/CButton";

const AuthPage = () => {
  return (
    <div className="px-4 flex flex-col gap-10 mt-[130px]">
      <Veil />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography
          variant="h1"
          fontSize={24}
          fontWeight={800}
          fontFamily={"Anjoman"}
          color={"white"}
        >
          ورود / ثبت نام
        </Typography>
        <Typography
          variant="body1"
          fontSize={14}
          fontFamily={"Anjoman"}
          color={"#A6A6CB"}
        >
          برای ورود به جمشید لطفا شماره تماس خود را وارد کنید
        </Typography>
      </Box>

      <form className="flex flex-col gap-10">
        <PhoneInput label="شماره همراه" fullWidth />
        <CButton fullWidth>ادامه</CButton>
      </form>
    </div>
  );
};

export default AuthPage;
