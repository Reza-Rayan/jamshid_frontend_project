import { Button, Typography } from "@mui/material";
import React from "react";

interface CButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const CButton = ({ children, fullWidth, onClick }: CButtonProps) => {
  return (
    <Button
      className="btn-style  text-white"
      onClick={onClick}
      fullWidth={fullWidth}
    >
      <Typography
        fontFamily={"Anjoman"}
        color={"white"}
        padding={1}
        fontSize={18}
        fontWeight={500}
        textAlign={"center"}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default CButton;
