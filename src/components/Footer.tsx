function Footer() {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="flex justify-between">
        <p>© 2024 Los Angeles State Historic Park</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;