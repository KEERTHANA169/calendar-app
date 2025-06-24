import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm px-6 py-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">CRMHub</h1>
      <nav className="space-y-4 text-lg text-gray-700 font-medium">
        <button className="block text-left hover:text-blue-600">📊 Dashboard</button>
        <button className="block text-left hover:text-blue-600">👥 Contacts</button>
        <button className="block text-left text-blue-600 font-semibold">📅 Calendar</button>
        <button className="block text-left hover:text-blue-600">📈 Reports</button>
      </nav>
    </aside>
  );
}
