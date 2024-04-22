import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for routing
import { Button, Input, InputAdornment, OutlinedInput } from "@mui/material";
import { LuSearch } from "react-icons/lu";

const SearchBox = () => {
  const handleClick = () => {
    // Add your onClick functionality here
    console.log("Button clicked");
  };

  return (
    <div className="flex items-center">
      <Link to="/">
        <Button component="span">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41667 14.5833 1.66667 9.99996 1.66667C5.41663 1.66667 1.66663 5.41667 1.66663 10C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.64172 12.3583L12.3584 7.64166"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3584 12.3583L7.64172 7.64166"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Link>
      <OutlinedInput
        sx={{
          "& fieldset": {
            borderColor: "#4C4C72",
            borderRadius: "8px",
          },
          "& input": {
            color: "white", // Text color of the input
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <LuSearch className="text-2xl text-[#4C4C72]" />
          </InputAdornment>
        }
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchBox;
