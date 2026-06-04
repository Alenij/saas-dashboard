import { SideNav } from "./SideNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (<div className="flex">
    <SideNav />
    <Outlet />
  </div>)
};

export default DashboardLayout;
