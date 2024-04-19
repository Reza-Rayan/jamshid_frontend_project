import { TextField } from "@mui/material";
import ReactFlagsSelect from "react-flags-select";

import "../styles/forms.css";

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
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        label={label}
        placeholder={placeholder}
        fullWidth={fullWidth}
        name={name}
        id={id}
        type="tel"
        color="info"
        InputLabelProps={{ style: { color: "#ffffff" } }}
        InputProps={{
          style: { color: "#ffffff" },
          sx: {
            border: "1px solid #4C4C72",
            borderRadius: "8px",
            direction: "rtl",
          },
          startAdornment: (
            <ReactFlagsSelect
              selected="IR"
              onSelect={(countryCode: string) => {
                // Handle country selection if needed
              }}
              showSelectedLabel={false}
              className="custom-flag"
            />
          ),
        }}
      />
    </div>
  );
};

export default PhoneInput;
