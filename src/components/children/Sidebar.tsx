interface Pages {
    name: string;
    link: string;
}
 
const relatedPages:Pages[] = [
  {name: "Page 1", link: "#"},
  {name: "Page 2", link: "#"},
  {name: "Page 3", link: "#"},
  {name: "Page 4", link: "#"},
  {name: "Page 5", link: "#"},
];

const Sidebar = () => {
  
    return (
      <div className="flex-row lg:flex-col">
          <div className="p-6">
            <h3 className="text-lg font-bold">Related Pages</h3>
            <ul className="list-disc">
              {relatedPages.map((page) => (
                <li key={page.name} className="p-2 mx-6">
                  <a href={page.link} className="hover:underline">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Join our email List</h3>
              <a href="#" className="text-medium-blue hover:underline">
                Sign up to receive LASHP General Plan Amendment Information
              </a>
            </div>
        </div>
      );
}

export default Sidebar