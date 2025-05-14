import { Link } from "react-router";
import { HiCalendar } from "react-icons/hi";
import { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { name: "Reservation", path: "/", icon: <HiCalendar /> },
  ];

  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-16 bg-gray-100 md:w-56">
      <div className="mb-8 p-4">
        <img
          src="/logo.png"
          className="hidden w-auto rounded bg-indigo-500 p-1 md:flex"
        />
        <img
          src="/logo-mini.png"
          className="flex w-auto bg-indigo-500 md:hidden"
        />
      </div>

      <ul className="mt-6 space-y-6 px-4">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`rounded-md px-5 py-2 font-medium hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index} ? : " bg-indigo-100 text-indigo-500`}
          >
            <Link
              to={link.path}
              className="flex items-center justify-center md:justify-start md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon}</span>
              <span className="hidden text-sm text-gray-500 md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
