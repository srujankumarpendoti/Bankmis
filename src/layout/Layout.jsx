import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout({ user }) {
  return (
    <div className="min-h-screen bg-[url('/bg_img.png')] bg-cover bg-center">

      {/* SIDEBAR ONLY AFTER LOGIN  sd*/}
      {user && <Sidebar />}

      <main className={`${user ? "ml-64" : ""} pt-20 p-8 text-white`}>
        <Outlet />
      </main>

    </div>
  );
}
