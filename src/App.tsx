import { TextField } from "@mui/material";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-extrabold">پروژه جمشید</h1>
      <p className="text-[14px]">
        این پروژه یک اپلیکیشن سرگرمی است که با بازی مافیا شروع به کار خواهد کرد
      </p>
      <TextField
        dir="rtl"
        placeholder="تست راست چین بودن MUI"
        id="outlined-basic"
        label="تست راست چین بودن MUI"
        variant="outlined"
      />
    </div>
  );
};

export default App;
