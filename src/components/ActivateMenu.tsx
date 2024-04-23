import { useLocation } from "react-router-dom";

interface ActivateMenuProps {
  url?: string;
}

const ActivateMenu = ({ url }: ActivateMenuProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <>
      {isActive(`${url}`) && (
        <div className="bg-[#0C0C3F] absolute top-[-28px] right-[30%] w-6 h-6 flex items-center justify-center rounded-2xl">
          <span className=" w-2 h-2 rounded-full bg-[#64c9f3] block z-30"></span>
        </div>
      )}
    </>
  );
};

export default ActivateMenu;
