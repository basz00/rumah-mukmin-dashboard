import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="ml-16 flex h-screen w-full flex-col md:ml-56">
          <div>
            <Header />
          </div>
          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
