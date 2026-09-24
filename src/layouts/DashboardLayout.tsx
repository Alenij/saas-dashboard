import { useState } from "react";
import { SideNav } from "./SideNav";
import { Outlet } from "react-router-dom";
import ham from "../assets/icons/hamburger.svg";

const DashboardLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <button
        onClick={() => {
          setOpenDrawer(true);
        }}
        className="lg:hidden"
      >
        <img src={ham} alt="Open menu" className="w-4 h-4 p-2" />
      </button>
      <div className="hidden lg:block">
        <SideNav open={openDrawer} onClose={() => setOpenDrawer(false)} />
      </div>
      {openDrawer && (
        <div className="lg:hidden fixed inset-0 z-50">
          <SideNav open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </div>
      )}

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
