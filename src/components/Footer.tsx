function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.getFullYear();

  
  return (
    <footer className="bg-night text-light-grey p-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-evenly items-center 
      md:mx-[12%]">
        <div className="flex-col md:flex md:flex-row w-full md:w-1/4 items-center md:justify-start">
          <img src="/CalStateParkLogo.png" alt="california government logo" id='footer-logo' loading="lazy"/>
          <p className="md:px-4">© {formattedDate} Los Angeles State Historic Park</p>
        </div>
        
        <ul className="w-full md:w-3/4 lg:flex lg:flex-row lg:justify-evenly py-2 md:pl-8">
          <li>
            <a href="https://www.parks.ca.gov/ConditionsOfUse" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="https://www.parks.ca.gov/Privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;