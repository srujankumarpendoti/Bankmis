import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ user }) {

  const navigate = useNavigate();

  // 🔥 AUTO REDIRECT IF LOGGED IN
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="h-screen flex items-center justify-center text-center">

      <div>
        <h1 className="text-3xl font-semibold text-indigo-900">
          Gayatri Cooperative Bank Portal
        </h1>

        <p className="text-gray-600 mt-3">
          Welcome to the internal banking system. Access MIS dashboards,
          policies, SOP's, circulars and Internal services securely.
        </p>

        {!user && (
          <button
            onClick={() => navigate("/login")}
            className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          >
            Employee Login →
          </button>
        )}

      </div>

    </div>
  );
}
