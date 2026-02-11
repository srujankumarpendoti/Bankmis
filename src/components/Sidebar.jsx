import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  CubeIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  NewspaperIcon,
  PhoneIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

/* ================= MENU DATA ================= */

const mainMenu = [
  { name: "Dashboard", icon: HomeIcon, path: "/dashboard" },
  { name: "Reports", icon: ChartBarIcon, path: "/reports" },
  { name: "Products", icon: CubeIcon, path: "/products" },
  { name: "Policies", icon: ClipboardDocumentListIcon, path: "/policies" },
  { name: "SOP's", icon: DocumentTextIcon, path: "/sops" },
  { name: "Circulars", icon: NewspaperIcon, path: "/circulars" },
  { name: "Contact Info", icon: PhoneIcon, path: "/contactinfo" }
];

const extraMenu = [
  { name: "Promotions", icon: MegaphoneIcon, path: "/promotions" },
  { name: "Trainings", icon: AcademicCapIcon, path: "/trainings" },
  { name: "Complaint Cell", icon: ExclamationTriangleIcon, path: "/complaint" }
];

/* ================= COMPONENT ================= */

export default function Sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0 h-screen w-64
        bg-gradient-to-b from-[#0b132b] to-[#020617]
        text-white
        pt-20 px-4
        shadow-xl
      "
    >
      {/* ===== MAIN MENU ===== */}
      <nav className="space-y-1">

        {mainMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3
                px-3 py-2 rounded-lg
                cursor-pointer
                transition-all duration-200 ease-in-out
                hover:translate-x-1
                ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon className="size-5" />
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}

      </nav>

      {/* ===== SECOND SECTION ===== */}
      <div className="mt-10">

        <p className="text-xs text-gray-400 mb-4 tracking-wide">
          Internal Services
        </p>

        <div className="space-y-1">
          {extraMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3
                  px-3 py-2 rounded-lg
                  cursor-pointer
                  transition-all duration-200 ease-in-out
                  hover:translate-x-1
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon className="size-5" />
                <span className="text-sm">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>

      </div>

    </aside>
  );
}
