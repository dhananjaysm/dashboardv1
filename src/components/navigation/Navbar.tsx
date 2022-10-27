import { useState } from "react";
import {
  BsBellFill,
  BsFillGrid3X3GapFill,
  BsPatchQuestion,
} from "react-icons/bs";
import { IoIosArrowDown, IoMdSettings } from "react-icons/io";
import { SiSalesforce } from "react-icons/si";
import { Links } from "../utils/links";

const Drawer = ({ isActive, setIsActive, isOpen, setIsOpen }: any) => {
  return (
    <main
      className={
        " fixed lg:hidden overflow-hidden mt-12 z-10 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-200 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-1/2 max-w-lg right-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="flex flex-col h-screen">
          <div className="flex flex-row items-center p-2 border-b-2">
            <div className="text-gray-500">
              <BsFillGrid3X3GapFill size={24} />
            </div>
            <h2 className="px-4 text-lg font-semibold ">Sales </h2>
          </div>
          {/* Drawer links */}
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={() => {
                setIsOpen(false);
                setIsActive(link.name);
              }}
              className={
                "block px-6 py-2 border-b-2 hover:bg-slate-300" +
                (isActive === link.name
                  ? " bg-blue-100 font-semibold text-black"
                  : "")
              }
            >
              <div>{link.name}</div>
            </a>
          ))}
          <div className="mx-auto mt-4">
            <ul className="flex flex-row items-center text-gray-600 ">
              {Options.map((option) => (
                <li key={option.id} className="px-1 hover:text-gray-400">
                  <a href="#">{option.icon}</a>
                </li>
              ))}
              <li>
                <a href="#">
                  <div>
                    <img
                      className="w-10 mx-2 border-4 border-gray-500 rounded-full "
                      src="/profile_img.jpg"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="w-screen h-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

const Options = [
  {
    id: 3,
    icon: <IoMdSettings size={24} />,
  },
  {
    id: 2,
    icon: <BsBellFill size={24} />,
  },
  {
    id: 1,
    icon: <BsPatchQuestion size={24} />,
  },
];

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("Dashboards");

  console.log(isToggle);
  return (
    <div className="fixed top-0 flex flex-col w-full p-2 bg-white">
      <div className="flex flex-row items-center justify-between w-full">
        <div id="logo" className="text-blue-500 p-">
          <SiSalesforce size={40} />
        </div>
        {/* Search Input */}

        <div className="relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="block p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded bg-gray-50 w-80 "
            placeholder="Search"
          />
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-row items-center text-gray-600 ">
            {Options.map((option) => (
              <li key={option.id} className="px-1 hover:text-gray-400">
                <a href="#">{option.icon}</a>
              </li>
            ))}
            <li>
              <a href="#">
                <div>
                  <img
                    className="w-10 mx-2 border-4 border-gray-500 rounded-full "
                    src="/profile_img.jpg"
                    alt="profile"
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu Button */}

        <div className="block lg:hidden">
          <button onClick={() => setIsToggle(!isToggle)}>
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-gray-600"></span>
              <span className="block w-8 h-1 bg-gray-600"></span>
              <span className="block w-8 h-1 bg-gray-600"></span>
            </div>
          </button>
        </div>
        <Drawer
          isOpen={isToggle}
          setIsOpen={setIsToggle}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      {/* Hidden Menu */}
      {/* md:space-x-8 md:pr-4 */}
      <div className="items-center hidden lg:pr-4 lg:space-x-8 lg:flex-row lg:flex md:ml-1">
        <div className="flex flex-row items-center">
          <div className="text-gray-500">
            <BsFillGrid3X3GapFill size={24} />
          </div>
          <h2 className="pl-4 text-lg font-semibold ">Sales </h2>
        </div>

        {Links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={() => setIsActive(link.name)}
            className={
              "font-medium flex flex-row p-1 items-center text-gray-500 md:text-sm hover:text-gray-900" +
              (isActive === link.name
                ? " bg-blue-100 border-t-4 font-semibold text-black border-blue-700"
                : "")
            }
          >
            {link.name}
            <p className="pl-2">
              <IoIosArrowDown />
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
