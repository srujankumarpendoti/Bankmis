import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ user, setUser }) {

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Detect login page automatically
  const isLoginPage = location.pathname === "/login";

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-[#0b132b] flex items-center justify-between px-8">

      <div className="flex h-16 items-center justify-between w-full">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img src="/gcub_logo2.png" className="h-10 w-auto" />
          <span className="text-white text-lg font-semibold">
            Gayatri Bank
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {user && (
            <button className="rounded-full p-1 text-gray-400 hover:text-white">
              <BellIcon className="size-6" />
            </button>
          )}

          {/* ⭐ LOGIN BUTTON */}
          {!user && !isLoginPage && (
            <button
              onClick={() => navigate("/login")}
              className="text-gray-300 hover:text-white border-white border-2 px-3 py-1 rounded-3xl text-sm font-medium"
            >
              Login →
            </button>
          )}

          {/* ⭐ PROFILE MENU */}
          {user && (
            <Menu as="div" className="relative">
              <MenuButton className="text-gray-300 hover:text-white text-sm">
                {user.Employee_Name}
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg outline outline-black/5">

                <MenuItem>
                  {({ active }) => (
                    <button className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                      Profile
                    </button>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}
                    >
                      Logout
                    </button>
                  )}
                </MenuItem>

              </MenuItems>
            </Menu>
          )}

        </div>

      </div>
    </nav>
  );
}
