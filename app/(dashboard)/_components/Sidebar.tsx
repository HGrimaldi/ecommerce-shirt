import { Logo } from "./Logo";
import { SidebarRoutes } from "./SidebarRoutes";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-[#ededed] dark:bg-[#1f1f1f] shadow-sm">
            <div className="p-7 flex items-center justify-center">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    );
}

export default Sidebar;

