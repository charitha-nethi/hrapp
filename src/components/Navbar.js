const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." className="border p-2 rounded w-1/3" />
      <div className="icons">
        <span>🌙</span> {/* Dark mode toggle */}
        <span>🔔</span> {/* Notifications */}
        <span>👤</span> {/* User Profile */}
      </div>
    </div>
  );
};

export default Navbar;
