import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation-bar/NavigationBar";

const Layout = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <NavigationBar />

      <div className="flex-1 p-2 bg-gray-300/10 overflow-y-auto px-10 py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
