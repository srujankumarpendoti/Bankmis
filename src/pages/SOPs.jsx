import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function SOPs() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [department, setDepartment] = useState("");
  const [subDept, setSubDept] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [departments, setDepartments] = useState([]);
  const [subDepts, setSubDepts] = useState([]);

  /* ===============================
     LOAD DROPDOWN DATA
  =============================== */
  useEffect(() => {

    axios
      .get(`https://bankmis-backend.onrender.com/api/sops/list`)
      .then(res => {

        const list = Array.isArray(res.data) ? res.data : [];

        const depts = [...new Set(list.map(d => d.Department))];
        const subs = [...new Set(list.map(d => d.Sub_Department))];

        setDepartments(depts);
        setSubDepts(subs);

      })
      .catch(console.error);

  }, []);

  /* ===============================
     LOAD FILTERED DATA
  =============================== */
  useEffect(() => {

    setLoading(true);

    axios
      .get(`${API}/api/sops/list`, {
        params: {
          department,
          subDept,
          month,
          year
        }
      })
      .then(res => {

        const list = Array.isArray(res.data) ? res.data : [];
        setData(list);

      })
      .catch(console.error)
      .finally(() => setLoading(false));

  }, [department, subDept, month, year]);

  return (
    <div className="space-y-6 text-gray-900">

      <h1 className="text-2xl font-semibold">
        SOPs
      </h1>

      {/* FILTERS */}
      <div className="flex gap-3 flex-wrap text-white">

        <select
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
          className="bg-gray-800 border border-indigo-600 rounded-lg px-3 py-2"
        >
          <option value="">All Departments</option>
          {departments.map(dep=>(
            <option key={dep}>{dep}</option>
          ))}
        </select>

        <select
          value={subDept}
          onChange={(e)=>setSubDept(e.target.value)}
          className="bg-gray-800 border border-indigo-600 rounded-lg px-3 py-2"
        >
          <option value="">All Sub Departments</option>
          {subDepts.map(sd=>(
            <option key={sd}>{sd}</option>
          ))}
        </select>

        <select
          value={month}
          onChange={(e)=>setMonth(e.target.value)}
          className="bg-gray-800 border border-indigo-600 rounded-lg px-3 py-2"
        >
          <option value="">All Months</option>
          {[...Array(12)].map((_,i)=>(
            <option key={i+1} value={String(i+1).padStart(2,'0')}>
              {i+1}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e)=>setYear(e.target.value)}
          className="bg-gray-800 border border-indigo-600 rounded-lg px-3 py-2"
        >
          <option value="">All Years</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>

      </div>

      {/* SOP LIST */}
      <div className="bg-gray-800 border border-indigo-700/40 rounded-xl p-6">

        {loading && <p className="text-indigo-300">Loading SOPs...</p>}

        {!loading && data.length === 0 && (
          <p className="text-indigo-400">No SOPs found.</p>
        )}

        {!loading && data.map(item=>(
          <div
            key={item.Policy_ID}
            className="border-b border-indigo-800/40 py-3 flex justify-between items-center hover:bg-indigo-900/30"
          >
            <div>
              <p className="font-medium text-indigo-100">{item.Title}</p>
              <p className="text-sm text-indigo-300">
                {item.Department} / {item.Sub_Department}
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-indigo-700/40 text-indigo-200 text-xs">
              SOP
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
