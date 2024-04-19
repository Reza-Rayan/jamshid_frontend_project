import * as React from "react";
import { Button } from "@mui/material";
import Link from "@mui/material";

// Iconst
import { RiHome5Fill } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { ArticleOutlined } from "@mui/icons-material";
import { CiShop } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const CMenu = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="relative ">
      <div className="fixed w-full bottom-0 flex gap-4 custom-menu-sticky py-3">
        <Button>
          <RiHome5Fill fontSize={20} color="#A6A6CB" />
        </Button>
        <Button>
          <LuSearch fontSize={20} color="#A6A6CB" />
        </Button>
        <Button>
          <ArticleOutlined className="text-[#A6A6CB] text-[20px]" />
        </Button>
        <Button>
          <CiShop fontSize={20} color="#A6A6CB" />
        </Button>
        <Button>
          <FaUser fontSize={20} color="#A6A6CB" />
        </Button>
      </div>
    </div>
  );
};

export default CMenu;
