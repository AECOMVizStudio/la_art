interface Pages {
    name: string;
    link: string;
}
 
const relatedPages:Pages[] = [
  {name: "Los Angeles SHP", link: "https://www.parks.ca.gov/?page_id=22272"},
  {name: "Archaeological Excavation at LASHP ", link: "https://www.parks.ca.gov/?page_id=25540"},
  {name: "LASHP General Plan", link: "https://lastatehistoricpark.org/wp-content/uploads/2021/07/LASHP-General-Plan.pdf"},
  {name: "Volunteer with LA River State Park Partners", link: "https://www.parks.ca.gov/?page_id=25858"},
  
];

const Sidebar = () => {
  
    return (
      <div className="flex-row lg:flex-col">
          <div className="p-6">
            <h3 className="text-lg font-bold">Related Pages</h3>
            <ul className="list-disc">
              {relatedPages.map((page) => (
                <li key={page.name} className="p-2 mx-6 underline">
                  <a href={page.link} target="_blank" rel="noopener noreferrer">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Join our email list!</h3>
              <a href="https://docs.google.com/forms/d/1dku_08vhyPRPaIfBE1B6JNZXp-qnZNz2UwVhYjKqgbk/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">
              Sign up to receive updates on the LASHP General Plan Amendment
              </a>
            </div>
        </div>
      );
}

export default Sidebar