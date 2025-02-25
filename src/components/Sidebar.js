import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <h2 className="sidebar">HR GENIE</h2>
      </div>
      <ul className="sidebar">
        <li >
          <Link to="/" >Dashboard</Link>
        </li>
        <li >
          <Link to="/analytics" >Analytics</Link>
        </li>
        <li >
          <Link to="/signin" >Sign In</Link>
        </li>
        <li >
          <Link to="/signup" >Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

