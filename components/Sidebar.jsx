import { AppProvider } from "@/context/context";
import {
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";

const Sidebar = () => {
  const {isMenuOpen, setIsMenuOpen } = useContext(AppProvider);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setIsMenuOpen(open);
  }, [open]);
  const Menus = [
    {
      title: "Disscussion Fourm",
      src: (
        <ChatBubbleBottomCenterTextIcon
          className={`${!open && "hidden"} h-5 w-5`}
        />
      ),
    },
    {
      title: "Market Stories",
      src: <CurrencyDollarIcon className={`${!open && "hidden"} h-5 w-5`} />,
    },
    { title: "Sentiment", src: "" },
    { title: "Market ", src: "" },
    { title: "Sector", src: "" },
    { title: "Watchlist", src: "" },
    { title: "Events ", src: "" },
    { title: "News/Interview", src: "" },
  ];
  return (
    <div className="flex fixed">
      <div
        className={` ${
          open ? "w-60 bg-blue-800" : "w-0 lg:w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="control.png"
          className={`absolute cursor-pointer -right-3 top-1/2 w-7 border-dark-purple 
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center justify-between">
          <UserIcon
            className={`cursor-pointer duration-500 h-10 w-10 text-white ${
              open && "rotate-[360deg] "
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-sm duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hello, User
          </h1>
          <BellAlertIcon className="h-8 w-8 text-white" />
        </div>
        <hr className={`${!open ? "hidden" : "mt-2"}`} />
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-2
                `}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
