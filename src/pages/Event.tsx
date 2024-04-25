import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimeBox from "../components/TimeBox";
import { mafia } from "../data/mafia.json";
import EventLayout from "../layout/EventLayout";
import CCarousel from "../templates/CCarousel";

interface GameData {
  id: string;
  title: string;
  location: string;
  conductor: string;
  date: string;
  image: string;
  avatar: string;
  description: string;
  address: string;
}

const Event: React.FC = () => {
  const params = useParams<{ id: any }>();
  const [game, setGame] = useState<GameData | null>(null);
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const { id } = params;
    const selectedGame = mafia.find((game) => game.id === id);
    if (selectedGame) {
      setGame(selectedGame);

      // Calculate countdown
      const eventDate = new Date(selectedGame.date).getTime();

      const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });

        // If the countdown is finished, clear the interval
        if (distance <= 0) {
          clearInterval(intervalId);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [params]);

  const users = [
    {
      id: 1,
      username: "محمد امینی",
      avatar: <Avatar />,
    },
    {
      id: 2,
      username: "محمد امینی",
      avatar: <Avatar />,
    },
    {
      id: 3,
      username: "محمد امینی",
      avatar: <Avatar />,
    },
    {
      id: 4,
      username: "محمد امینی",
      avatar: <Avatar />,
    },
    {
      id: 5,
      username: "محمد امینی",
      avatar: <Avatar />,
    },
  ];

  const gameUsers = users.map((item) => ({
    content: (
      <div
        key={item.id}
        className="flex flex-col justify-center items-center gap-2"
      >
        {item.avatar}
        <Typography fontSize={12} fontWeight={500} color={"#ffffff"}>
          {" "}
          {item.username}
        </Typography>
      </div>
    ),
  }));

  return (
    <EventLayout pageTitle="جزئیات ایونت">
      {game && (
        <>
          <Box
            sx={{
              backgroundColor: "#242452",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 20px",
              borderRadius: "8px",
              marginBottom: "20px",
              gap: "5px",
            }}
          >
            <Typography
              fontSize={15}
              fontWeight={600}
              variant="h2"
              color={"#ffffff"}
            >
              شروع ایونت در
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box sx={{ flexDirection: "column" }}>
                <TimeBox value={countdown.seconds} label="ثانیه" />
              </Box>
              <Box sx={{ flexDirection: "column" }}>
                <TimeBox value={countdown.minutes} label="دقیقه" />
              </Box>
              <Box sx={{ flexDirection: "column" }}>
                <TimeBox value={countdown.hours} label="ساعت" />
              </Box>
              <Box sx={{ flexDirection: "column" }}>
                <TimeBox value={countdown.days} label="روز" />
              </Box>
            </Box>
          </Box>
          <Box>
            <img
              src={game.image}
              alt="Game Banner"
              className="w-full rounded-md"
            />
          </Box>
          <Box
            className="my-4"
            sx={{
              backgroundColor: "#242452",
              padding: "8px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={game.avatar}
                className="rounded-full"
                width={21}
                height={21}
              />
              <Typography fontSize={12}>
                گرداننده:{" "}
                <span className="text-white font-medium">{game.conductor}</span>
              </Typography>
            </div>
            {/* Starts */}
            <div className="flex gap-2 items-center">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2975 3.13248L11.6175 5.77248C11.7975 6.13998 12.2775 6.49248 12.6825 6.55998L15.075 6.95748C16.605 7.21248 16.965 8.32248 15.8625 9.41748L14.0025 11.2775C13.6875 11.5925 13.515 12.2 13.6125 12.635L14.145 14.9375C14.565 16.76 13.5975 17.465 11.985 16.5125L9.74249 15.185C9.33749 14.945 8.66999 14.945 8.25749 15.185L6.01499 16.5125C4.40999 17.465 3.43499 16.7525 3.85499 14.9375L4.38749 12.635C4.48499 12.2 4.31249 11.5925 3.99749 11.2775L2.13749 9.41748C1.04249 8.32248 1.39499 7.21248 2.92499 6.95748L5.31749 6.55998C5.71499 6.49248 6.19499 6.13998 6.37499 5.77248L7.69499 3.13248C8.41499 1.69998 9.58499 1.69998 10.2975 3.13248Z"
                  fill="#F2C94C"
                />
              </svg>
              <Typography fontSize={10} color={"white"}>
                ۸۲۷۳ امتیاز
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="font-extrabold text-white text-lg">{game.title}</h1>
            <div className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99994 6.715C6.86151 6.715 7.55994 6.01657 7.55994 5.155C7.55994 4.29344 6.86151 3.595 5.99994 3.595C5.13838 3.595 4.43994 4.29344 4.43994 5.155C4.43994 6.01657 5.13838 6.715 5.99994 6.715Z"
                  stroke="white"
                />
                <path
                  d="M1.80985 4.245C2.79485 -0.0849988 9.20985 -0.0799987 10.1899 4.25C10.7649 6.79 9.18485 8.94 7.79985 10.27C6.79485 11.24 5.20485 11.24 4.19485 10.27C2.81485 8.94 1.23485 6.785 1.80985 4.245Z"
                  stroke="white"
                />
              </svg>

              <span className="text-[10px] text-white">{game.location}</span>
            </div>
          </Box>
          <div className="flex items-center gap-1 text-[12px] font-medium my-2">
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

            <span>{game.date}</span>
          </div>
          <Box
            sx={{ borderBottom: "1px solid #4C4C7250", paddingBottom: "16px" }}
          >
            <Typography
              variant="body1"
              component={"p"}
              fontSize={13}
              fontWeight={400}
              textAlign={"justify"}
            >
              {game.description}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              color={"#ffffff"}
              variant="h2"
              fontSize={14}
              fontWeight={800}
            >
              محل برگزاری
            </Typography>
            <Typography color={"#C8C8E1"} fontSize={12} marginTop={2}>
              {game.address}
            </Typography>
            <Box
              sx={{
                paddingBottom: "20px",
                borderBottom: "1px solid #4C4C7250",
                marginTop: "10px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.71488427788034!2d51.40877829644872!3d35.71891256260421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010beff0a169%3A0xecb885f314c8e3cc!2sName%20Cafe!5e0!3m2!1sen!2s!4v1714054193275!5m2!1sen!2s"
                height="234"
                width="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                color={"#ffffff"}
                fontSize={14}
                fontWeight={800}
              >
                افردای که شرکت کرده اند{" "}
              </Typography>
              <Typography fontSize={12} color={"#A6A6CB"} fontWeight={800}>
                ۶ نفر
              </Typography>
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              <CCarousel slides={gameUsers} perSlider={4} spaceBetween={50} />
            </Box>
          </Box>
        </>
      )}
    </EventLayout>
  );
};

export default Event;
