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
    <div className="bg-dark-grey text-light-grey px-4 py-10 flex flex-col md:flex-row md:px-0 justify-start">
      <div className="flex flex-col w-full md:w-1/4
      md:mx-[12%] ">

      <h3 className="text-lg font-normal mt-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href={followLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img src="./icons/facebook.svg" className="svg" alt="facebook"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.twitter} target="_blank" rel="noopener noreferrer">
                <img src="./icons/x.svg" className="svg" alt="x.com"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.youtube} target="_blank" rel="noopener noreferrer">
                <img src="./icons/youtube.svg" className="svg" alt="youtube"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.instagram} target="_blank" rel="noopener noreferrer">
                <img src="./icons/instagram.svg" className="svg" alt="instagram"></img>
              </a>
            </li>
            <li>
              <a className="bg-white" href={followLinks.wordpress} target="_blank" rel="noopener noreferrer">
                <img src="./icons/wordpress.svg" className="svg" alt="wordpress"></img>
              </a>
            </li>
          </ul>
      </div>

      <div className="flex flex-col w-full md:w-1/4">

          <h3 className="text-lg font-normal mt-4">Contact Us</h3>
          <p className="">Have a question? Contact us <a className="underline" href="https://www.parks.ca.gov/?page_id=23110" target="_blank" rel="noopener noreferrer">here</a></p>
      </div>

      
    </div>
  );
}
  
  export default Connections;