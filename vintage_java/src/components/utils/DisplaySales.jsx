import React, { useState, useEffect } from "react";
import fetchDailySales from "./fetchData";
import generateDailyReport from "./generateReport";

const DailySalesReport = ({ date }) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const salesData = await fetchDailySales(date);
        const generatedReport = generateDailyReport(salesData);
        setReport(generatedReport);
      } catch (error) {
        console.error("Error fetching or generating report:", error);
      }
    };

    fetchReport();
  }, [date]);

  if (!report) return <div>Loading...</div>;

  return (
    <div className="report-container p-3 mx-auto w-75 shadow rounded">
      <h2 className="my-4 text-center">Daily Sales Report</h2>
      <p>Total Orders: {report.totalOrders}</p>
      <p>Total Revenue: ₹{report.totalRevenue.toFixed(2)}</p>
      <h3>Items Sold</h3>
      <ul>
        {Object.entries(report.itemsSold).map(([name, details]) => (
          <li key={name}>
            {name}: {details.quantity} sold for ₹
            {details.totalAmount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailySalesReport;
