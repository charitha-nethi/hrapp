import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">HR GENIE</h2>
      <ul>
        <li className="mb-3">
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li className="mb-3">
          <Link to="/analytics" className="block p-2 hover:bg-gray-700 rounded">Analytics</Link>
        </li>
        <li className="mb-3">
          <Link to="/signin" className="block p-2 hover:bg-gray-700 rounded">Sign In</Link>
        </li>
        <li className="mb-3">
          <Link to="/signup" className="block p-2 hover:bg-gray-700 rounded">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
