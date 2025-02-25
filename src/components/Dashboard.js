const Dashboard = () => {
  return (
    <div className="content">
      <h2 className="heading">Dashboard</h2>
      <div className="card">
      <div className="">
        <div className="bg-white shadow-md p-5 rounded">
          <h3 className="text-lg font-bold">Sales</h3>
          <p>230K</p>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">Customers</h3>
          <p>8.549K</p>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">Revenue</h3>
          <p>$9,745</p>
        </div>
      </div>
      <div className="">
        <h3 className="text-lg font-bold">Revenue Report</h3>
        <div className="bg-white shadow-md p-5 rounded">
          📊 Bar Chart Placeholder
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;

  