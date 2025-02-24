const Dashboard = () => {
    return (
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow-md p-5 rounded">
            <h3 className="text-lg font-bold">Sales</h3>
            <p>230K</p>
          </div>
          <div className="bg-white shadow-md p-5 rounded">
            <h3 className="text-lg font-bold">Customers</h3>
            <p>8.549K</p>
          </div>
          <div className="bg-white shadow-md p-5 rounded">
            <h3 className="text-lg font-bold">Revenue</h3>
            <p>$9,745</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Revenue Report</h3>
          <div className="bg-white shadow-md p-5 rounded">
            📊 Bar Chart Placeholder
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  