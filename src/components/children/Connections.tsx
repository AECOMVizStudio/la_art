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
      <div className="mt-8 bg-gray-100 p-4">
        <h3 className="text-lg font-bold">Connect with Parks and Rec</h3>
        <p>Sign up for the latest news and updates:</p>
        <form>
          <input type="email" placeholder="Your email address" className="border rounded-md p-2" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
  
        <h3 className="text-lg font-bold mt-4">Follow Us</h3>
        <ul className="flex space-x-4">
          <li>
            <a href={followLinks.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-blue-500"></i>
            </a>
          </li>
          <li>
            <a href={followLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-blue-500"></i>
            </a>
          </li>
          <li>
            <a href={followLinks.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-blue-500"></i>
            </a>
          </li>
        </ul>
  
        <h3 className="text-lg font-bold mt-4">Contact Us</h3>
      </div>
    );
  }
  
  export default Connections;