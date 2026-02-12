import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {

  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= LOGIN FUNCTION ================= */

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        {
          employeeId,
          password,
        }
      );

      // 🔥 Save user in App statex
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
       setUser(res.data.user);


      // 🔥 Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      setError("Invalid Employee ID or Password");
    } finally {
      setLoading(false);
    }

    



  };

  /* ================= UI ================= */

  return (
    <div className="
      w-[360px]
      bg-[#020617]/90
      backdrop-blur-lg
      p-8 rounded-xl
      shadow-xl
      text-white
    ">

      <h2 className="text-xl font-semibold mb-6 text-center">
        Employee Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">

        {/* EMPLOYEE ID */}
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="
            w-full px-4 py-3 rounded-full
            bg-white/10
            outline-none
            text-sm
            placeholder-gray-400
          "
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full px-4 py-3 rounded-full
            bg-white/10
            outline-none
            text-sm
            placeholder-gray-400
          "
          required
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-full
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:opacity-90
            transition-all
            text-sm font-medium
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}
