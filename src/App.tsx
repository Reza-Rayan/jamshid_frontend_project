// Custom Components
import PhoneInput from "./templates/PhoneInput";
import CButton from "./templates/CButton";
import Veil from "./components/Veil";

const App = () => {
  return (
    <div>
      <Veil />
      <form className="px-4 gap-10 flex flex-col">
        <PhoneInput label="شماره همراه" fullWidth />
        <CButton fullWidth>ادامه</CButton>
      </form>
    </div>
  );
};

export default App;
