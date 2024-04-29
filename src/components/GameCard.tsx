import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface GameCardProps {
  id?: string;
  title: string;
  address: string;
  conductor: string;
  date: string;
  image?: string;
  avatar?: string;
}

const GameCard = ({
  title,
  address,
  conductor,
  date,
  image,
  avatar,
  id,
}: GameCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "#24245270",
        color: "#ffffff",
        borderRadius: "10px",
      }}
      className="p-2"
    >
      <Link to={`event/${id}`}>
        <Box>
          <div className="flex gap-1 p-2 mb-2 bg-[#ffffff07] max-h-full">
            <img
              src={avatar}
              alt="گرداننده"
              className="rounded-full"
              width={21}
              height={21}
            />
            <div className="text-[12px] text-[#A6A6CB]">
              گرداننده:{" "}
              <span className="text-white font-medium">{conductor} </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-md">
            <img src={`${image}`} alt="event banner " className="w-full h-[200px]" height={100} />
          </div>
        </Box>

        <Box>
          <div className="flex items-center gap-1 mt-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C11 8.76 8.76 11 6 11C3.24 11 1 8.76 1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6Z"
                stroke="#A6A6CB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.85494 7.59L6.30494 6.665C6.03494 6.505 5.81494 6.12 5.81494 5.805V3.755"
                stroke="#A6A6CB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography fontSize={10} className="text-[#A6A6CB]">
              {date}
            </Typography>
          </div>
          <Stack className="my-4">
            <Typography
              component={"h3"}
              fontSize={12}
              fontWeight={800}
              style={{ margin: "10ox " }}
            >
              {title}
            </Typography>
          </Stack>
          <div className="flex items-center gap-1 mt-2 text-[#A6A6CB] border-b  border-[#A6A6CB15] pb-2 ">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99994 6.715C6.86151 6.715 7.55994 6.01657 7.55994 5.155C7.55994 4.29344 6.86151 3.595 5.99994 3.595C5.13838 3.595 4.43994 4.29344 4.43994 5.155C4.43994 6.01657 5.13838 6.715 5.99994 6.715Z"
                stroke="#A6A6CB"
              />
              <path
                d="M1.80985 4.245C2.79485 -0.0849988 9.20985 -0.0799987 10.1899 4.25C10.7649 6.79 9.18485 8.94 7.79985 10.27C6.79485 11.24 5.20485 11.24 4.19485 10.27C2.81485 8.94 1.23485 6.785 1.80985 4.245Z"
                stroke="#A6A6CB"
              />
            </svg>
            <Typography fontSize={10}>{address} </Typography>
          </div>
          <div className="flex items-center gap-1 mt-2 text-[#A6A6CB]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="3" fill="#2D2D59" />
              <path
                d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
                stroke="#A6A6CB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.2951 15C14.2951 13.065 12.3701 11.5 10.0001 11.5C7.63008 11.5 5.70508 13.065 5.70508 15"
                stroke="#A6A6CB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Typography fontSize={10}>+۲۱ نفر در بازی حضور دارند</Typography>
          </div>
        </Box>
      </Link>
    </Card>
  );
};

export default GameCard;
