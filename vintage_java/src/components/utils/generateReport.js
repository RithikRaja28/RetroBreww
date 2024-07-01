const generateDailyReport = (salesData) => {
  const report = {
    totalOrders: salesData.length,
    totalRevenue: salesData.reduce((acc, order) => acc + order.grandTotal, 0),
    itemsSold: {},
  };

  salesData.forEach((order) => {
    order.items.forEach((item) => {
      if (!report.itemsSold[item.name]) {
        report.itemsSold[item.name] = { quantity: 0, totalAmount: 0 };
      }
      report.itemsSold[item.name].quantity += item.quantity;
      report.itemsSold[item.name].totalAmount += item.price * item.quantity;
    });
  });

  return report;
};

export default generateDailyReport;
