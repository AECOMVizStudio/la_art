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

interface Mail {
  abbreviation: string;
  text: string;
  href?: string;
}

const mailingList:Mail[] = [
  {abbreviation: "EN", text: "Join our mailing list!", href: "https://docs.google.com/forms/d/1dku_08vhyPRPaIfBE1B6JNZXp-qnZNz2UwVhYjKqgbk/viewform?edit_requested=true"},
  {abbreviation: "ZH", text: "加入我们的邮件列表!"},
  {abbreviation: "ZH", text: "加入我們的郵件清單!"},
  {abbreviation: "SP", text: "¡Únase a nuestra lista de correo!"},
]

const rightChevron = 
  (<svg className="carat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12px" height="12px">
  <path d="M9 6l6 6-6 6z"/>
  </svg>)

const Sidebar = () => {
  
    return (
      <div className="flex-row lg:flex-col p-6">
          <div className="py-6">
            <h3 className="text-xl font-bold">Related Pages</h3>
            <ul className="list-none">
              {relatedPages.map((page) => (
                <li key={page.name} className="p-2 border-b flex flex-row items-center">
                  {rightChevron}
                  <a href={page.link} target="_blank" rel="noopener noreferrer">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            <div className="py-6">
              <h3 className="text-xl font-bold">Sign up to receive LASHP General Plan Amendment information</h3>
              {mailingList.map((item) => (
                <div className="bg-gray-200 flex flex-row my-4 p-4 text-medium-blue rounded-md border border-gray-300">
                  <span className="bg-medium-blue text-white 
                                    language_icon">{item.abbreviation}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="mx-2">
                  {item.text}
                  </a>
                </div>
              ))}
            </div>
        </div>
      );
}

export default Sidebar