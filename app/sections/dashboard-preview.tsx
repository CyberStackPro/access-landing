import React, { useEffect, useState } from "react";

const generateRandomData = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
};

export function DashboardPreview() {
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">System Performance</h3>
      <div className="flex justify-between items-end h-40">
        {data.map((value, index) => (
          <div
            key={index}
            className="w-8 bg-green-500 rounded-t"
            style={{ height: `${value}%` }}
          >
            <div className="h-full w-full bg-green-500 rounded-t transition-all duration-500 ease-in-out"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}
