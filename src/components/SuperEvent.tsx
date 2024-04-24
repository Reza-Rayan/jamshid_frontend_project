// Import Image
import { Link } from "react-router-dom";
import AvatarImg from "../../public/images/avatar.jpg";
import SuperEventImg from "../../public/images/super-event.jpg";

const SuperEvent = () => {
  return (
    <Link to={"/"} className="relative overflow-hidden w-full ">
      <div className="super-event-bg h-full w-full bg-black opacity-60"></div>
      <div className="relative">
        <img src={SuperEventImg} className="rounded-lg h-[168px] w-full " />
        <div className=" p-4 flex justify-between absolute top-0 left-0  w-full">
          <div className="text-[10px] text-[#A6A6CB] font-medium h-7">
            <div className="bg-[#0C0C3F] text-white h-7 p-1 flex items-center gap-1 rounded-md">
              <img
                src={AvatarImg}
                alt="گرداننده"
                className="rounded-full h-5 w-5"
              />
              گرداننده:{" "}
              <span className="font-bold text-white">علیرضا رودی</span>
            </div>
          </div>
          <div className="bg-[#EB2D83] text-white h-7  w-14 rounded-md flex items-center justify-start gap-1 pr-2">
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93976 6.6466H6.87976V1.8466C6.87976 0.726603 6.2731 0.499937 5.5331 1.33994L4.99976 1.9466L0.48643 7.07994C-0.13357 7.77994 0.12643 8.35327 1.05976 8.35327H3.11976V13.1533C3.11976 14.2733 3.72643 14.4999 4.46643 13.6599L4.99976 13.0533L9.5131 7.91994C10.1331 7.21994 9.8731 6.6466 8.93976 6.6466Z"
                fill="white"
              />
            </svg>
            <span className="w-[10px]">ویژه</span>
          </div>
        </div>
        <div className="absolute bottom-0   flex justify-between px-5 py-2 w-full">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-extrabold">ایونت مافیا (شب کلاسیک)</h4>
            <span className="text-[10px] font-medium text-[#A6A6CB] flex items-center gap-1 mt-2">
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

              <span>ساعت ۲۳:۲۰ ـ ۱۸ فروردین</span>
            </span>
          </div>
          <div className="flex flex-col  gap-1 ">
            <div className="flex items-center mt-1 text-[13px] justify-end w-full gap-[1px]">
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

              <span>کافه دون کلاب</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuperEvent;
