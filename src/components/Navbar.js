const Navbar = () => {
    return (
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <input type="text" placeholder="Search..." className="border p-2 rounded w-1/3" />
        <div className="flex items-center gap-4">
          <span>🌙</span> {/* Dark mode toggle */}
          <span>🔔</span> {/* Notifications */}
          <span>👤</span> {/* User Profile */}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  