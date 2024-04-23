import { Button, Icon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ActivateMenu from "../components/ActivateMenu";

const CMenu = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="relative z-50">
      <div className="fixed w-full bottom-0 flex gap-4 custom-menu-sticky py-3">
        <Button
          className="relative h-full"
          component={Link}
          to="/"
          style={{ color: isActive("/") ? "white" : "#A6A6CB" }}
        >
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.01669 2.36664L3.52502 5.86664C2.77502 6.44997 2.16669 7.69164 2.16669 8.63331V14.8083C2.16669 16.7416 3.74169 18.325 5.67502 18.325H15.325C17.2584 18.325 18.8334 16.7416 18.8334 14.8166V8.74997C18.8334 7.74164 18.1584 6.44997 17.3334 5.87497L12.1834 2.26664C11.0167 1.44997 9.14169 1.49164 8.01669 2.36664Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={isActive("/") ? "#FFFFFF" : "none"}
              />
              <path
                d="M10.5 14.9916V12.4916"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <ActivateMenu url="/" />
        </Button>
        <Button
          className="relative h-full"
          component={Link}
          to="/explore"
          style={{ color: isActive("/explore") ? "white" : "#A6A6CB" }}
        >
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0833 17.5C14.4555 17.5 18 13.9555 18 9.58329C18 5.21104 14.4555 1.66663 10.0833 1.66663C5.71104 1.66663 2.16663 5.21104 2.16663 9.58329C2.16663 13.9555 5.71104 17.5 10.0833 17.5Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={isActive("/explore") ? "#FFFFFF" : "none"}
              />
              <path
                d="M18.8333 18.3333L17.1666 16.6666"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <ActivateMenu url="/explore" />
        </Button>
        <Button
          className="relative h-full"
          component={Link}
          to="/articles"
          style={{ color: isActive("/articles") ? "white" : "#A6A6CB" }}
        >
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99996 18.3333H13C17.1666 18.3333 18.8333 16.6666 18.8333 12.5V7.49996C18.8333 3.33329 17.1666 1.66663 13 1.66663H7.99996C3.83329 1.66663 2.16663 3.33329 2.16663 7.49996V12.5C2.16663 16.6666 3.83329 18.3333 7.99996 18.3333Z"
                stroke="#A6A6CB"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={isActive("/articles") ? "#FFFFFF" : "none"}
              />
              <path
                d="M13.625 7.5H7.375"
                stroke="#A6A6CB"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.625 12.5H7.375"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <ActivateMenu url="/articles" />
        </Button>
        <Button
          className="relative h-full"
          component={Link}
          to="/shop"
          style={{ color: isActive("/shop") ? "white" : "#A6A6CB" }}
        >
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1083 13.0916L18.1083 13.0927C18.1123 15.0891 17.685 16.3955 16.8691 17.2122C16.0532 18.0291 14.7466 18.4583 12.75 18.4583H8.24997C6.24896 18.4583 4.94251 18.029 4.12663 17.2122C3.31064 16.3954 2.8833 15.0888 2.8833 13.0916V9.34998C2.8833 9.31983 2.89559 9.28855 2.92123 9.2629C2.94687 9.23726 2.97816 9.22497 3.0083 9.22497H17.4916C17.5217 9.22497 17.553 9.23726 17.5786 9.2629C17.6042 9.28855 17.6166 9.31983 17.6166 9.34998V13.0916H18.1083Z"
                stroke="#A6A6CB"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={isActive("/shop") ? "#FFFFFF" : "none"}
              />
              <path
                d="M14.7499 8.33325V5.37492C14.7499 4.80647 14.5492 4.25553 14.1885 3.84447C13.8279 3.4334 13.3352 3.19731 12.8215 3.19731H8.1783C7.66454 3.19731 7.17182 3.4334 6.81116 3.84447C6.4505 4.25553 6.24988 4.80647 6.24988 5.37492V8.33325"
                stroke="#A6A6CB"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <ActivateMenu url="/shop" />
        </Button>
        <Button
          className="relative h-full"
          component={Link}
          to="/profile"
          style={{ color: isActive("/profile") ? "white" : "#A6A6CB" }}
        >
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill={isActive("/profile") ? "#FFFFFF" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6334 9.05829C10.55 9.04996 10.45 9.04996 10.3584 9.05829C8.37505 8.99163 6.80005 7.36663 6.80005 5.36663C6.80005 3.32496 8.45005 1.66663 10.5 1.66663C12.5417 1.66663 14.2 3.32496 14.2 5.36663C14.1917 7.36663 12.6167 8.99163 10.6334 9.05829Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.46672 12.1334C4.45006 13.4834 4.45006 15.6834 6.46672 17.025C8.75839 18.5584 12.5167 18.5584 14.8084 17.025C16.8251 15.675 16.8251 13.475 14.8084 12.1334C12.5251 10.6084 8.76672 10.6084 6.46672 12.1334Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <ActivateMenu url="/profile" />
        </Button>
      </div>
    </div>
  );
};

export default CMenu;
