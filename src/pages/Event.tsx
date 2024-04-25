import React, { useState, useEffect } from "react";
import EventLayout from "../layout/EventLayout";
import { Box, Typography } from "@mui/material";
import moment from "moment";

// Custom Component
import TimeBox from "../components/TimeBox";

const Event: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Static date to count down from
    const eventDate = moment("2024-05-01T12:00:00Z");

    const intervalId = setInterval(() => {
      // Calculate the difference between the current time and the event date
      const duration = moment.duration(eventDate.diff(moment()));

      // Update state with the remaining time
      setDays(Math.floor(duration.asDays()));
      setHours(duration.hours());
      setMinutes(duration.minutes());
      setSeconds(duration.seconds());

      // Clear the interval if the event date has passed
      if (eventDate <= moment()) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <EventLayout pageTitle="جزئیات ایونت">
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
            <TimeBox value={seconds} label="ثانیه" />
          </Box>
          <Box sx={{ flexDirection: "column" }}>
            <TimeBox value={minutes} label="دقیقه" />
          </Box>
          <Box sx={{ flexDirection: "column" }}>
            <TimeBox value={hours} label="ساعت" />
          </Box>
          <Box sx={{ flexDirection: "column" }}>
            <TimeBox value={days} label="روز" />
          </Box>
        </Box>
      </Box>
    </EventLayout>
  );
};

export default Event;
