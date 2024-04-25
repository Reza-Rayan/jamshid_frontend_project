import { Box, Typography } from "@mui/material";

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
  <>
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontSize={15} fontWeight={600} color={"#000000"}>
        {value}
      </Typography>
    </Box>
    <Box textAlign="center">
      <Typography fontSize={12} color={"#A6A6CB"} textAlign={"center"}>
        {label}
      </Typography>
    </Box>
  </>
);

export default TimeBox;
