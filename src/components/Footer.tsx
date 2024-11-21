import Connections from './children/Connections';

const followLinks = {
  facebook: 'https://m.facebook.com/CaliforniaStateParks/',
  twitter: 'https://x.com/CAStateParks',
  youtube: 'https://www.youtube.com/user/CaliforniaStateParks',
  instagram: 'https://www.instagram.com/castateparks/',
  wordpress: 'https://castateparks.wordpress.com/',
};

function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.getFullYear();

  return (
    <>
      <Connections followLinks={followLinks} />
      <footer className="bg-night text-light-grey p-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-4 mx-auto md:mx-[12%] items-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start py-4">
            <img
              src="/CalStateParkLogo.png"
              alt="california government logo"
              id="footer-logo"
              loading="lazy"
            />
            <p className="md:px-4 text-center md:text-left">
              © {formattedDate} Los Angeles State Historic Park
            </p>
          </div>

          <ul className="text-center md:text-left flex flex-col md:flex-row md:justify-between py-2">
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.parks.ca.gov/ConditionsOfUse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Conditions of Use
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="https://www.parks.ca.gov/Privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="hidden md:block"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
