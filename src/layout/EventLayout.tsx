import React from "react";
import { Box, Button, Typography,SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiMore } from "react-icons/tfi";

interface EventProps {
  children: React.ReactNode;
  pageTitle: string;
  price:number;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Event = ({ children, pageTitle,price }: EventProps) => {
  // Handle Drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
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
      <main className="py-3 px-4 mb-28">{children}</main>

      <Box
        sx={{
          backgroundColor: "#242452",
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
          zIndex:"50"
        }}
      >
        <div className="space-y-1">
          <Typography fontSize={12} fontWeight={400}>
            هزینه ورودی
          </Typography>
          <Typography fontSize={18} fontWeight={700} color={"#ffffff"}>
            <span>{price.toLocaleString()}</span> تومان
          </Typography>
        </div>
        <Button className="btn-style"
        onClick={toggleDrawer("bottom",true)}>
          <Typography color={"white"} fontSize={16} padding={"0px 20px"}>
            شرکت در ایونت
          </Typography>
        </Button>
      </Box>


      {/* Payment Drawer Section */}
      <SwipeableDrawer
      anchor={"bottom"}
      open={state["bottom"]}
      onClose={toggleDrawer("bottom", false)}
      onOpen={toggleDrawer("bottom", true)}

    >
      <Box
       sx={{
        backgroundColor:"#242452",
        padding:"20px",
        color:"#ffffff",
        display:"flex",
        flexDirection:"column",
        gap:"10px"
      }}
      >
      <Typography
      textAlign={"center"}
       fontSize={18}
       fontWeight={800}
       variant="h3"
       >
        پرداخت هزینه ورودی
      </Typography>
      <Typography
      textAlign={"center"}
       fontSize={12}
       fontWeight={300}
       variant="body1"
       color={"#A6A6CB"}
       >
        هزینه ورودی به ایونت را میتوانید از طریق یکی از درگاه های پرداخت پایین انجام دهید
      </Typography>

      <Typography
      textAlign={"left"}
       fontSize={16}
       fontWeight={800}
       variant="h3"
       marginTop={"10px"}
       >
       پرداخت از طریق
      </Typography>
      </Box>
    </SwipeableDrawer>
      {/* Payment Drawer Section */}
    </>
  );
};

export default Event;
