import logo from "../assets/icons/logo.svg";
import Arrow from "../assets/icons/down-arrow.svg";
import close from "../assets/icons/close.svg";
import { SideNavList } from "../components/SideNavList";

export const SideNav = ({open, onClose}: {open: boolean, onClose:(() => void)}) => {
  return (
    <>

      <nav className={`p-8 w-[315px] h-screen bg-black text-white ${open ? "sm:block" : "sm:hidden"}`}>
        <div className="flex justify-between">
          <div className="flex gap-5 items-center ">
            <img src={logo} alt="logo.svg" className="w-5 h-5" />
            <p className="text-2xl">Project OS</p>
          </div>
          <button onClick={onClose}>
            <img src={close} alt={close} className="w-6 h-6 lg:hidden" />
          </button>
        </div>
        <div className="flex items-center gap-0.5 my-6">
          <button className="bg-[#2F75F6] p-2 rounded-l text-sm font-semibold">Create New</button>
          <button className="bg-[#2F75F6] p-2 px-3 rounded-r">
            <img src={Arrow} alt="down-arrow.svg" className="w-4 h-5" />
          </button>
        </div>
        <SideNavList />
      </nav>
    </>
  );
};
