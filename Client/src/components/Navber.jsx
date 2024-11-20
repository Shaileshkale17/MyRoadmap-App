import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import notification from "../assets/Vector (7).svg";
import userImage from "../assets/user2.png";
const Navber = () => {
  const [ServerUserImaeg, setServerUserImaeg] = useState(null);
  const [notificationCount, setNotificationCount] = useState(50);

  return (
    <div className="flex items-center justify-between px-8 py-3 bg-[#62825D] ">
      <div>
        <img src={logo} alt="Logo" className="w-28  rounded-full" />
      </div>
      <ul className="flex flex-row items-center gap-6">
        <li className="relative">
          <img
            src={notification}
            alt="notification"
            className="p-2 rounded-full bg-[#cfd7fd70]"
          />
          <span className="absolute top-0 -right-2 text-white bg-[#d01818a7] p-1 rounded-full w-7 h-7 text-center font-medium text-sm">
            {notificationCount <= 10 ? notificationCount : "10+"}
          </span>
        </li>
        <li>
          <img
            src={ServerUserImaeg || userImage}
            alt="userImage"
            className="w-10 h-10 rounded-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navber;
