import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation-bar/NavigationBar";

const Layout = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <NavigationBar />

      <div className="flex-1 p-2 bg-gray-100 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
