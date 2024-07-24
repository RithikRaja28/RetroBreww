// SalesReport.js
import React, { useState, useEffect } from "react";
import { db } from "../Authentication/Auth";
import { collection, getDocs } from "firebase/firestore";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

// Register the required components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "data"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("Fetched data:", data); // Log the fetched data
        setSalesData(data);
      } catch (err) {
        console.error("Error fetching data:", err); // Log any errors
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  const processData = () => {
    const coffeeTypes = {};
    salesData.forEach((order) => {
      order.items.forEach((item) => {
        coffeeTypes[item.name] = (coffeeTypes[item.name] || 0) + item.quantity;
      });
    });

    return {
      labels: Object.keys(coffeeTypes),
      datasets: [
        {
          data: Object.values(coffeeTypes),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    };
  };

  const processBarData = () => {
    const coffeeSales = {};
    salesData.forEach((order) => {
      order.items.forEach((item) => {
        coffeeSales[item.name] = (coffeeSales[item.name] || 0) + item.quantity;
      });
    });

    const highestSelling = Object.entries(coffeeSales).reduce(
      (acc, [key, value]) => (value > acc.value ? { name: key, value } : acc),
      { name: "", value: 0 }
    );

    return {
      labels: [highestSelling.name],
      datasets: [
        {
          label: "Highest Selling Coffee Type",
          data: [highestSelling.value],
          backgroundColor: "#36A2EB",
        },
      ],
    };
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div className="container mt-5">Error: {error}</div>; // Show error message
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sales Report</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Coffee Sales Distribution</h5>
            </div>
            <div className="card-body">
              <Pie data={processData()} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Highest Selling Coffee Type</h5>
            </div>
            <div className="card-body">
              <Bar
                data={processBarData()}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
