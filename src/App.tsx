// Custom Components
import PhoneInput from "./templates/PhoneInput";
import CButton from "./templates/CButton";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-extrabold text-white">پروژه جمشید</h1>
      <p className="text-[14px] text-white">
        این پروژه یک اپلیکیشن سرگرمی است که با بازی مافیا شروع به کار خواهد کرد
      </p>
      <form className="px-4 gap-10 flex flex-col">
        <PhoneInput label="شماره همراه" fullWidth />
        <CButton fullWidth>ادامه</CButton>
      </form>
    </div>
  );
};

export default App;
