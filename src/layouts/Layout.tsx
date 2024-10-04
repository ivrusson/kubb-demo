import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="prose p-5">
      <Outlet />
    </main>
  );
};

export default Layout;
