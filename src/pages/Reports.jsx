import { useEffect, useState } from "react";
import axios from "axios";

export default function Reports({ user }) {

  const [reports, setReports] = useState([]);
  const [mode, setMode] = useState("month"); // month | annual
  const [selectedMonth, setSelectedMonth] = useState("");

  // =============================
  // 🔥 Helper → Get YYYY-MM month
  // =============================
  const getMonth = (monthsAgo) => {
    const d = new Date();
    d.setMonth(d.getMonth() - monthsAgo);
    return d.toISOString().slice(0, 7);
  };

  // =============================
  // 🔥 LOAD DATA
  // =============================
  useEffect(() => {

    if (!user?.Employee_ID) return;

    if (mode === "month" && selectedMonth) {
      axios
        .get(
          `http://localhost:5000/api/reports/monthly/${user.Employee_ID}/${selectedMonth}`
        )
        .then(res => setReports(res.data))
        .catch(console.error);
    }

    if (mode === "annual") {
      axios
        .get(
          `http://localhost:5000/api/reports/annual/${user.Employee_ID}`
        )
        .then(res => setReports(res.data))
        .catch(console.error);
    }

  }, [user, mode, selectedMonth]);

  // =============================
  // 🔥 MIS TOTALS CALCULATION
  // =============================
  const totals = reports.reduce((acc, row) => {
    acc.ca += row.CA_Deposits || 0;
    acc.sa += row.SA_Deposits || 0;
    acc.td += row.TD_Deposits || 0;
    acc.gold += row.Gold_Loans || 0;
    acc.agri += row.Agri_Loans || 0;
    acc.dl += row.DL_Loans || 0;
    acc.other += row.Other_Loans || 0;
    acc.npa += row.NPA || 0;
    acc.overdue += row.Overdue || 0;
    return acc;
  }, {
    ca:0, sa:0, td:0,
    gold:0, agri:0, dl:0, other:0,
    npa:0, overdue:0
  });

  const totalDeposits = totals.ca + totals.sa + totals.td;
  const totalLoans =
    totals.gold + totals.agri + totals.dl + totals.other;

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-2xl font-semibold text-gray-900">
        MIS Reports
      </h1>

      {/* ================= BUTTON CONTROLS ================= */}
      <div className="flex gap-3">

        <button
          onClick={() => {
            setMode("month");
            setSelectedMonth(getMonth(1));
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:opacity-90"
        >
          Last Month
        </button>

        <button
          onClick={() => {
            setMode("month");
            setSelectedMonth(getMonth(2));
          }}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-90"
        >
          2 Months Ago
        </button>

        <button
          onClick={() => {
            setMode("month");
            setSelectedMonth(getMonth(3));
          }}
          className="px-4 py-2 bg-indigo-400 text-white rounded-lg hover:opacity-90"
        >
          3 Months Ago
        </button>

        <button
          onClick={() => setMode("annual")}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:opacity-90"
        >
          Annual (Month-End)
        </button>

      </div>

      {/* ================= MIS SUMMARY CARDS ================= */}
      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Total Deposits</p>
          <h3 className="text-xl font-bold text-indigo-700">
            ₹ {totalDeposits.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Total Loans</p>
          <h3 className="text-xl font-bold text-indigo-700">
            ₹ {totalLoans.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">NPA</p>
          <h3 className="text-xl font-bold text-red-600">
            ₹ {totals.npa.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Overdue</p>
          <h3 className="text-xl font-bold text-orange-500">
            ₹ {totals.overdue.toLocaleString()}
          </h3>
        </div>

      </div>

      {/* ================= REPORT TABLE ================= */}
      <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="sticky top-0 bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 text-left px-3">Date</th>
              <th>CA</th>
              <th>SA</th>
              <th>TD</th>
              <th>Gold Loan</th>
              <th>Agri Loan</th>
              <th>DL Loan</th>
              <th>Other Loan</th>
              <th>NPA</th>
              <th>Overdue</th>
            </tr>
          </thead>

          <tbody className="text-gray-900">

            {reports.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">

                <td className="py-2 px-3">{row.Date}</td>

                <td>{row.CA_Deposits}</td>
                <td>{row.SA_Deposits}</td>
                <td>{row.TD_Deposits}</td>

                <td>{row.Gold_Loans}</td>
                <td>{row.Agri_Loans}</td>
                <td>{row.DL_Loans}</td>
                <td>{row.Other_Loans}</td>

                <td className="text-red-600 font-medium">{row.NPA}</td>
                <td className="text-orange-500 font-medium">{row.Overdue}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
