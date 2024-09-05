interface SidebarProps {
    relatedPages: string[];
  }



const Sidebar = ({relatedPages} : SidebarProps) => {
    return (
      <div className="flex-row lg:flex-col">
          <div className="p-6">
            <h3 className="text-lg font-bold">Related Pages</h3>
            <ul className="list-disc">
              {relatedPages.map((page) => (
                <li key={page} className="p-2 mx-6">
                  <a href="#" className="hover:underline">
                    {page}
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