export default function Dashboard() {
  return (
    <div className="space-y-8 text-gray-900">

      {/* ================= WELCOME HEADER ================= */}
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold">
          Welcome to Gayatri Cooperative Bank MIS Portal
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor deposits, advances, NPA and branch performance in real time.
        </p>
      </div>

      {/* ================= MIS CARDS ================= */}
      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Deposits</p>
          <h3 className="text-2xl font-bold mt-2 text-indigo-700">
            ₹ 4.25 Cr
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Advances</p>
          <h3 className="text-2xl font-bold mt-2 text-indigo-700">
            ₹ 3.10 Cr
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">NPA Amount</p>
          <h3 className="text-2xl font-bold mt-2 text-red-500">
            ₹ 22.5 L
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Overdue</p>
          <h3 className="text-2xl font-bold mt-2 text-orange-500">
            ₹ 9.8 L
          </h3>
        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">Quick Actions</h2>

        <div className="grid grid-cols-4 gap-4 text-sm">

          <div className="bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100">
            View Reports
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100">
            Add Product
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100">
            Check Circulars
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100">
            Contact Directory
          </div>

        </div>
      </div>

      {/* ================= BRANCH INFO ================= */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="font-semibold mb-4">
          Branch Overview
        </h2>

        <div className="grid grid-cols-3 gap-6 text-sm">

          <div>
            <p className="text-gray-500">Region</p>
            <p className="font-medium">North Zone</p>
          </div>

          <div>
            <p className="text-gray-500">Branch</p>
            <p className="font-medium">Main Branch</p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium">Advances</p>
          </div>

        </div>

      </div>

      {/* ================= RECENT ACTIVITY ================= */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="font-semibold mb-4">
          Recent Activity
        </h2>

        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Description</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="py-3">12 Feb</td>
              <td>Gold Loan Disbursement</td>
              <td>₹ 1,20,000</td>
              <td className="text-green-600">Completed</td>
            </tr>

            <tr className="border-t">
              <td className="py-3">11 Feb</td>
              <td>TD Deposit Created</td>
              <td>₹ 3,00,000</td>
              <td className="text-green-600">Completed</td>
            </tr>

            <tr className="border-t">
              <td className="py-3">10 Feb</td>
              <td>Overdue Reminder Sent</td>
              <td>₹ 45,000</td>
              <td className="text-orange-500">Pending</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}
