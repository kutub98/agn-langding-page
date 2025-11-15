export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">My Website</h2>
          <p className="text-gray-300">
            The best platform to learn and grow your skills.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">Email: support@website.com</p>
          <p className="text-gray-300">Phone: +880123456789</p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} My Website — All Rights Reserved.
      </div>
    </footer>
  );
}
