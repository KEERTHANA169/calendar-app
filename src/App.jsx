import React from "react";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      {/* Tailwind test */}
      <h1 className="text-4xl text-red-600 font-bold mb-6">
        ✅ Tailwind CSS is Working!
      </h1>

      <div className="flex min-h-screen bg-white shadow rounded">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white p-4 border-r">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">CRMHUB</h2>
          <nav className="space-y-3 text-gray-700">
            <div>Dashboard</div>
            <div>Accounts</div>
            <div>Contacts</div>
            <div>Leads</div>
            <div className="text-blue-600 font-semibold">Calendar</div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              + Add Event
            </button>
          </header>

          <Calendar />
        </main>
      </div>
    </div>
  );
}

export default App;
