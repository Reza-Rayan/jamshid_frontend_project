import React from "react";
import { Box, Tabs, Tab, useTheme, Tooltip } from "@mui/material";

interface TabsProps {
  title: string;
}

const CTabs = ({ title }: TabsProps) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        position: "relative",
      }}
    >
      <h2 className="text-[12px]">{title}</h2>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="games"
        sx={{
          "& .MuiTabs-scroller": {
            overflow: "unset",
          },
          "& .MuiTabs-indicator": {
            display: "none", // Hide the indicator
          },
          "& .MuiTab-root": {
            minWidth: "30px",
            fontSize: "12px",
            borderRadius: "10px",
            minHeight: "0px",
            margin: "auto",
            color: "#A6A6CB",
            "&.Mui-selected": {
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              color: theme.palette.common.white,
            },
            "&.Mui-disabled": {
              color: "#A6A6CB",
            },
          },
        }}
      >
        <Tab label="همه" />
        <Tab label="مافیا" />
        <Tab label="دومینو" disabled />

        <Tab label="اسم فامیل" disabled />
      </Tabs>
    </Box>
  );
};

export default CTabs;
