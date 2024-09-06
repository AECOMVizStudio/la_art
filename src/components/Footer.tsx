function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.getFullYear();

  
  return (
    <footer className="bg-night text-light-grey p-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-col md:flex md:flex-row w-full md:w-1/4 items-center md:justify-evenly">
          <img src="/CAgov.png" alt="california government logo" id='footer-logo'/>
          <p className="md:px-4">© {formattedDate} Los Angeles State Historic Park</p>
        </div>
        <ul className="w-full md:w-2/4 lg:flex lg:flex-row lg:justify-evenly py-2 md:pl-8">
          <li>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;