import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiMore } from "react-icons/tfi";

interface EventProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Event = ({ children, pageTitle }: EventProps) => {
  return (
    <>
      <header className=" py-3 px-4">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <h1 className="text-white flex items-center gap-2">
              <FaArrowRightLong />
              {pageTitle}
            </h1>
          </Link>
          <span className="rounded-lg w-10 h-10 border border-[#4C4C72] flex justify-center items-center">
            <TfiMore color="white" fontSize={20} />
          </span>
        </Box>
      </header>
      <main>{children}</main>

      <Box
        sx={{
          backgroundColor: "#242452",
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
        }}
      >
        <div className="space-y-1">
          <Typography fontSize={12} fontWeight={400}>
            هزینه ورودی
          </Typography>
          <Typography fontSize={18} fontWeight={700} color={"#ffffff"}>
            ۲۳.۰۰۰ تومان
          </Typography>
        </div>
        <Button className="btn-style ">
          <Typography color={"white"} fontSize={16}>شرکت در ایونت</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Event;
