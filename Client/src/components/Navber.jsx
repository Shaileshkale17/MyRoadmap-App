import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/Logo.svg";
import notificationIcon from "../assets/Vector (7).svg";
import userImage from "../assets/user2.png";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Link } from "react-router-dom";

TimeAgo.addLocale(en);

const Navber = () => {
  const [serverUserImage, setServerUserImage] = useState(null); // Fix state type
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const dropdownRef = useRef(null);
  const userProfileRef = useRef(null);

  const notificationList = [
    {
      userInfo: {
        id: 1,
        name: "John Doe",
        profileImage:
          "https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0", // Assuming correct image URL
        email: "johndoe@example.com",
        phone: "+1234567890",
        accountDetails: {
          accountType: "Premium",
          membershipSince: "2023-01-15",
          lastLogin: "2024-11-20T18:30:00Z",
        },
        notifications: [
          {
            id: 1,
            title: "New Message",
            message: "You have a new message from John.",
            timestamp: "2024-11-21T10:00:00Z",
            read: false,
            type: "message",
          },
          {
            id: 2,
            title: "System Update",
            message: "The system will undergo maintenance at midnight.",
            timestamp: "2024-11-21T12:30:00Z",
            read: false,
            type: "system",
          },
          {
            id: 3,
            title: "Task Reminder",
            message: "Don't forget to complete your pending tasks.",
            timestamp: "2024-11-21T13:45:00Z",
            read: true,
            type: "reminder",
          },
        ],
        settings: {
          theme: "dark",
          language: "en-US",
          notificationsEnabled: true,
        },
      },
    },
  ];

  useEffect(() => {
    setServerUserImage(notificationList[0].userInfo); // Set user data when component mounts
  }, []);

  const unreadCount = notificationList[0].userInfo.notifications.filter(
    (n) => !n.read
  ).length;
  const timeAgo = new TimeAgo("en-US");

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
        setShowUserProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-12 py-3 bg-primaryColor relative">
      <Link to="/dashbord">
        <img src={logo} alt="Logo" className="w-28 rounded-full" />
      </Link>

      <ul className="flex flex-row items-center gap-6">
        {/* Notifications */}
        <li className="relative" ref={dropdownRef}>
          <img
            src={notificationIcon}
            alt="notification"
            className="p-2 rounded-full bg-[#cfd7fd70]"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {unreadCount > 0 && (
            <span className="absolute top-0 -right-2 text-white bg-[#d01818a7] p-1 rounded-full w-7 h-7 text-center font-medium text-sm">
              {unreadCount > 10 ? "10+" : unreadCount}
            </span>
          )}
          {showNotifications && (
            <div className="h-56 w-80 absolute bg-white top-14 -right-16 z-50 rounded-md shadow-md overflow-y-auto">
              {notificationList[0].userInfo.notifications.map(
                (notification) => (
                  <div
                    key={notification.id}
                    className="p-4 border-b border-gray-300">
                    <div className="flex flex-row justify-between">
                      <h6 className="font-medium text-black">
                        {notification.title}
                      </h6>
                      <p className="text-xs text-gray-500">
                        {timeAgo.format(new Date(notification.timestamp))}
                      </p>
                    </div>

                    <p className="text-sm text-gray-700">
                      {notification.message}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </li>
        {/* User Profile */}
        <li className="relative" ref={userProfileRef}>
          <img
            src={serverUserImage ? serverUserImage.profileImage : userImage}
            alt="userImage"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            onClick={() => setShowUserProfile(!showUserProfile)}
          />
          {showUserProfile && (
            <div className="absolute top-14 -right-9 w-64 bg-primaryColor rounded-md shadow-md text-center p-4 z-50">
              <h3 className="text-white text-lg font-medium mb-4">
                {serverUserImage?.name || "User Name"}
              </h3>
              <img
                src={serverUserImage ? serverUserImage.profileImage : userImage}
                alt="User Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <button className="w-full py-2 mb-4 border border-white text-white rounded-full hover:bg-white hover:text-[#62825D]">
                Manage your Account
              </button>
              <button className="w-full py-2 text-white hover:underline">
                Sign out
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navber;
