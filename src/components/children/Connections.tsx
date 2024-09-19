interface ConnectionsProps {
    followLinks: {
      facebook: string;
      twitter: string;
      youtube: string;
      instagram: string;
      wordpress: string;
    };
}
  
function Connections({ followLinks }: ConnectionsProps) {
  return (
    <div className="bg-dark-grey text-light-grey px-4 py-10 md:px-0">
      <div className="grid md:grid-cols-3 gap-4 mx-auto md:mx-[12%] items-start">
        
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-normal mt-4">Follow Us</h3>
          <ul className="flex space-x-4 mt-4">
            <li>
              <a href={followLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img src="./icons/facebook.svg" className="svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href={followLinks.twitter} target="_blank" rel="noopener noreferrer">
                <img src="./icons/x.svg" className="svg" alt="x.com" />
              </a>
            </li>
            <li>
              <a href={followLinks.youtube} target="_blank" rel="noopener noreferrer">
                <img src="./icons/youtube.svg" className="svg" alt="youtube" />
              </a>
            </li>
            <li>
              <a href={followLinks.instagram} target="_blank" rel="noopener noreferrer">
                <img src="./icons/instagram.svg" className="svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href={followLinks.wordpress} target="_blank" rel="noopener noreferrer">
                <img src="./icons/wordpress.svg" className="svg" alt="wordpress" />
              </a>
            </li>
          </ul>
        </div>
        
      
        <div className="flex flex-col items-center md:items-start md:col-span-2">
          <h3 className="text-lg font-normal mt-4">Contact Us</h3>
          <p className="mt-4 text-center md:text-left">
            Have a question? Contact us
            <a className="underline ml-1" href="https://www.parks.ca.gov/?page_id=23110" target="_blank" rel="noopener noreferrer">here</a>
          </p>
        </div>
        

        <div className="hidden md:block">

        </div>

      </div>
    </div>

  );
}
  
  export default Connections;