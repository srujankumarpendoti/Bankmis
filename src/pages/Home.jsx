import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="
      min-h-screen
      flex flex-col items-center justify-center
      text-center
      bg-[url('/bg_img.png')] bg-cover bg-center
      text-indigo-900
    ">

      <h1 className="text-4xl font-bold mb-4">
        Gayatri Cooperative Bank Portal
      </h1>

      <p className="max-w-xl mb-8 opacity-80">
        Welcome to the internal banking system.
        Access MIS dashboards, policies, SOP's,
        circulars and internal services securely.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="
          px-8 py-3 rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white
          hover:opacity-90
          transition-all
        "
      >
        Employee Login →
      </button>

    </div>
  );
}
