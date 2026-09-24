import dashboardIcon from "../assets/icons/dashboard.svg";
import userIcon from "../assets/icons/user.svg";
import { Link } from "react-router-dom";

const NAVLINKS = [
  {name: "Dashboard", link: "/", icon: dashboardIcon },
    {name: "Users", link: "/user", icon: userIcon }

]

export const SideNavList = () => {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {NAVLINKS.map((link) => (
          <li className="flex items-center gap-3 text-sm rounded px py-2 hover:bg-[#191919] w-full" key={link.name}>
          <img src={link.icon} alt={link.icon} className="w-4 h-4" />
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
        </ul>
      </div>
  )
}

