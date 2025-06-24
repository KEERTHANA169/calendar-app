import React from "react";
import { format } from "date-fns";

export default function Header({ currentMonth, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
      <h2 className="text-2xl font-semibold text-gray-800">{format(currentMonth, "MMMM yyyy")}</h2>
      <div className="flex items-center gap-2">
        <button onClick={onPrev} className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300">←</button>
        <button onClick={onNext} className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300">→</button>
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+ Add Event</button>
      </div>
    </div>
  );
}
