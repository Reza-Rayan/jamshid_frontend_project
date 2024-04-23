import { Box, Card, Typography } from "@mui/material";

interface BLogCardProps {
  title: string;
  comments: number;
  date: string;
  image?: string;
  author: string;
}

const BLogCard = ({ title, comments, date, image, author }: BLogCardProps) => {
  return (
    <Card
      sx={{ backgroundColor: "#24245270", color: "#ffffff" }}
      className="p-2"
    >
      <img src={image} alt="" className="rounded-lg" width={215} height={110} />
      <Box className="border-b border-[#A6A6CB15] pb-2">
        <div className="text-[#A6A6CB] flex gap-1 my-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 1V2.5"
              stroke="#A6A6CB"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 1V2.5"
              stroke="#A6A6CB"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.75 4.54504H10.25"
              stroke="#A6A6CB"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 4.25V8.5C10.5 10 9.75 11 8 11H4C2.25 11 1.5 10 1.5 8.5V4.25C1.5 2.75 2.25 1.75 4 1.75H8C9.75 1.75 10.5 2.75 10.5 4.25Z"
              stroke="#A6A6CB"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99774 6.84998H6.00223"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.14716 6.84998H4.15165"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.14716 8.34998H4.15165"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography fontSize={10} fontWeight={500}>
            {date}
          </Typography>
        </div>
        <Typography fontSize={12} fontWeight={800} color={"white"}>
          {title}
        </Typography>
      </Box>
      <div className="flex justify-between items-center">
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

          <Typography fontSize={10}>{author}</Typography>
        </div>
        <div
          className="flex items-center justify-center gap-1 p-1 rounded-[3px]
          bg-[#2D2D59] mt-[6px]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 9.5H4C2 9.5 1 9 1 6.5V4C1 2 2 1 4 1H8C10 1 11 2 11 4V6.5C11 8.5 10 9.5 8 9.5H7.75C7.595 9.5 7.445 9.575 7.35 9.7L6.6 10.7C6.27 11.14 5.73 11.14 5.4 10.7L4.65 9.7C4.57 9.59 4.385 9.5 4.25 9.5Z"
              stroke="#A6A6CB"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99823 5.5H8.00272"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99774 5.5H6.00223"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.99725 5.5H4.00174"
              stroke="#A6A6CB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography fontSize={10} fontWeight={500}>
            {comments}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default BLogCard;
