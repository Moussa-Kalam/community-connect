const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            Community Connect is your one-stop platform to discover and book services from top-rated professionals in your area.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">Reviews</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Map</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">123 Service Lane, Community City, 12345</p>
          <p className="text-gray-400 mb-2">Email: info@communityconnect.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> {/* Font Awesome Icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> {/* Font Awesome Icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Community Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
