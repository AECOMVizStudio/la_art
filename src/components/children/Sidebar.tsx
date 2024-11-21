interface Pages {
  name: string;
  link: string;
}

const relatedPages: Pages[] = [
  { name: 'Los Angeles SHP', link: 'https://www.parks.ca.gov/?page_id=22272' },
  {
    name: 'Archaeological Excavation at LASHP ',
    link: 'https://www.parks.ca.gov/?page_id=25540',
  },
  {
    name: 'LASHP General Plan',
    link: 'https://lastatehistoricpark.org/wp-content/uploads/2021/07/LASHP-General-Plan.pdf',
  },
];

interface Mail {
  language: string;
  abbreviation: string;
  text: string;
  href?: string;
}

const mailingList: Mail[] = [
  {
    language: 'english',
    abbreviation: 'EN',
    text: 'Join our email list!',
    href: 'https://californiastateparks.formstack.com/forms/lastatehistoricparkgpa',
  },
];

const rightChevron = (
  <svg
    className="carat"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="12px"
    height="12px"
  >
    <path d="M9 6l6 6-6 6z" />
  </svg>
);

const Sidebar = () => {
  return (
    <div className="flex-row lg:flex-col p-6">
      <div className="py-6">
        <h3 className="text-xl font-bold">Related Pages</h3>
        <ul className="list-none">
          {relatedPages.map((page) => (
            <li
              key={page.name}
              className="p-2 border-b flex flex-row items-center"
            >
              {rightChevron}
              <a href={page.link} target="_blank" rel="noopener noreferrer">
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6 ">
        <h3 className="text-xl font-bold">
          Sign up to receive LASHP General Plan Amendment information
        </h3>
        {mailingList.map((item) => (
          <div
            className="bg-gradient-to-r from-[#d68100] via-[#e19735] to-[#e3af37] my-4 p-4 text-black font-extrabold rounded-md border max-w-fit
                  transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform hover:cursor-pointer hover:shadow-[0_0_15px_rgba(255,193,7,0.7)]"
            key={item.language}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-#2B2B2B tracking-wide text-lg will-change-auto"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
