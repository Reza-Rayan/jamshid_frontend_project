import { TextField } from "@mui/material";

interface PhoneInputProps {
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  name?: string;
  id?: string;
}

const PhoneInput = ({
  label,
  placeholder,
  fullWidth,
  name,
  id,
}: PhoneInputProps) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      name={name}
      id={id}
      type="tel"
      color="info"
      InputLabelProps={{ style: { color: "#4C4C72" } }}
      InputProps={{
        style: { color: "#ffffff" },
        sx: {
          border: "1px solid #4C4C72",
          borderRadius: "8px",
        },
      }}
    />
  );
};

export default PhoneInput;
