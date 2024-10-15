const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-white shadow-md">
    <h1 className="text-2xl font-bold text-green-500">Community Connect</h1>
    <div className="space-x-6">
      <a href="/" className="text-lg font-medium text-gray-700 hover:text-green-500">Home</a>
      <a href="/profile" className="text-lg font-medium text-gray-700 hover:text-green-500">Bookings</a>
      <a href="/Chat" className="text-lg font-medium text-gray-700 hover:text-green-500">Chat</a>
      <a href="/profile" className="text-lg font-medium text-gray-700 hover:text-green-500">Profile</a>
      <a href="/login" className="text-lg font-medium text-gray-700 hover:text-green-500">Logout</a>
    </div>
  </nav>
);

export default Navbar;
