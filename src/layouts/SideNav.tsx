import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import Arrow from "../assets/icons/down-arrow.svg";
import dashboardIcon from "../assets/icons/dashboard.svg";
import userIcon from "../assets/icons/user.svg";

export const SideNav = () => {
  return (
    <>
      <nav className="p-6 w-[315px] h-screen bg-black text-white">
        <div className="flex gap-5 items-center ">
          <img src={logo} alt="logo.svg" className="w-5 h-5" />
          <p className="text-2xl">Project OS</p>
        </div>
        <div className="flex items-center gap-0.5 my-6">
          <button className="bg-[#2F75F6] p-1 rounded-l">Create New</button>
          <button className="bg-[#2F75F6] p-1 px-2 rounded-r">
            <img src={Arrow} alt="down-arrow.svg" className="w-3 h-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-3 text-sm rounded p-2 hover:bg-[#191919] w-full">
            <img src={dashboardIcon} alt={dashboardIcon} className="w-3 h-6" />
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li className="flex items-center gap-3 text-sm rounded p-2 hover:bg-[#191919]">
            <img src={userIcon} alt={userIcon}className="w-3 h-6" />

            <Link to={"/user"}>Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
