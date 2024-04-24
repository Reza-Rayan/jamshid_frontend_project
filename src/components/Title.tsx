import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
  description?: string;
  href?: string;
}
const   Title = ({ title, description, href }: TitleProps) => {
  return (
    <div className="flex items-center gap-[1px] my-4">
      <div>
        <Typography variant="h2" fontSize={16} fontWeight={800}>
          {title}
        </Typography>
        <Typography variant="body1" fontSize={8} fontWeight={400}>
          {description}
        </Typography>
      </div>
      <div>
        <span className=" h-[1px] bg-[#A6A6CB20] flex w-[140px] items-center"></span>
      </div>
      <Link to={`${href}`} className="flex gap-1 items-center text-[#A6A6CB]">
        <span className="text-[10px]">مشاهده بیشتر</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.37992 3.95333L2.33325 8L6.37992 12.0467"
            stroke="#A6A6CB"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6668 8H2.44678"
            stroke="#A6A6CB"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Title;
