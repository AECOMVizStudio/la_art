interface ConnectionsProps {
    followLinks: {
      facebook: string;
      twitter: string;
      instagram: string;
      mailer: string;
    };
  }
  
function Connections({ followLinks }: ConnectionsProps) {
  return (
    <div className="mt-8 bg-dark-grey text-light-grey p-4 md:py-4 flex flex-col md:flex-row justify-around">
      <div className="flex flex-col w-full md:w-1/4">

      <h3 className="text-2xl font">Connect with Parks and Rec</h3>
      <p>Sign up to receive the latest State Parks news directly to your email:</p>

      <button className="bg-white text-black font-bold rounded-xl px-8 py-2 my-4 max-w-fit uppercase">Subscribe Now</button>
      </div>

      <div className="flex flex-col w-full md:w-1/4">
        <h3 className="text-lg font-bold mt-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href={followLinks.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-blue-500">FB</i>
              </a>
            </li>
            <li>
              <a href={followLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-blue-500">X</i>
              </a>
            </li>
            <li>
              <a href={followLinks.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-blue-500">Youtube</i>
              </a>
            </li>
          </ul>
          <h3 className="text-lg font-bold mt-4">Contact Us</h3>
      </div>

      
    </div>
  );
}
  
  export default Connections;