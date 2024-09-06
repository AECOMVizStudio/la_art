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
    <div className="bg-dark-grey text-light-grey px-4 py-10 flex flex-col md:flex-row justify-around">
      <div className="flex flex-col w-full md:w-1/4">

      <h3 className="text-2xl font-normal">Connect with Parks and Rec</h3>
      <p>Sign up to receive the latest State Parks news directly to your email:</p>

      <button className="bg-white text-black font-bold rounded-xl px-8 py-2 my-4 max-w-fit uppercase">Subscribe Now</button>
      </div>

      <div className="flex flex-col w-full md:w-1/4">
        <h3 className="text-lg font-normal mt-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href={followLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img src="./icons/facebook.svg" className="svg"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.twitter} target="_blank" rel="noopener noreferrer">
                <img src="./icons/x.svg" className="svg"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.youtube} target="_blank" rel="noopener noreferrer">
                <img src="./icons/youtube.svg" className="svg"></img>
              </a>
            </li>
            <li>
              <a href={followLinks.instagram} target="_blank" rel="noopener noreferrer">
                <img src="./icons/instagram.svg" className="svg"></img>
              </a>
            </li>
            {/* <li>
              <a href={followLinks.wordpress} target="_blank" rel="noopener noreferrer">
                <img src="./icons/wordpress.svg" className="svg" width="100" height="100"></img>
              </a>
            </li> */}
          </ul>
          <h3 className="text-lg font-normal mt-4">Contact Us</h3>
          <p className="">Have a question? Contact us here</p>
      </div>

      
    </div>
  );
}
  
  export default Connections;