interface SidebarProps {
    relatedPages: string[];
  }



const Sidebar = ({relatedPages} : SidebarProps) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold">Related Pages</h3>
          <ul>
            {relatedPages.map((page) => (
              <li key={page} className="py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Sidebar