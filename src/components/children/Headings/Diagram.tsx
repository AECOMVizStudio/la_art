import { useState } from 'react'
interface DiagramLanguage {
  language: string;
  abbreviation: string;
  text: string;
  href?: string;
}

const diagrams:DiagramLanguage[] = [
  {
    language: "English",
    abbreviation: "EN",
    text:"English",
    href:"/pdf/General Plan Amendment Process.pdf"
  },
  {
    language:"Spanish",
    abbreviation:"SP",
    text:"Spanish",
    href:'/pdf/GPA Process_sp_accessible.pdf'
  },
  {
    language:"Traditional Chinese",
    abbreviation:"ZH",
    text:"Chinese - Traditional",
    href:'/pdf/GPA Process_tc_accessible.pdf'
  },
  {
    language:"Simplified Chinese",
    abbreviation:"ZH",
    text: "Chinese - Simplified ",
    href:'/pdf/GPA Process_sc_accessible.pdf'
  }
]



const Diagram = () => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const expandHandler = () => {
    setExpanded (prev => {
      return !prev
    })
  }

    return (
      <>
        <p className="font-medium pt-4">
        To view a diagram of the LASHP GPA Process, click on your preferred language, below: 

        </p>
        {/* mobile view */}
        <div className='sm:hidden' onClick={expandHandler}>
          <div className="bg-gray-200 flex justify-between p-2">
            <p className='text-center font-bold'>Click to expand</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            style={{transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className={expanded ? 'grid grid-cols-4 gap-0' : 'hidden'}>
            {diagrams.map((diagram) => {
                    return ( 
                        <div key={diagram.language}className="flex justify-start items-center p-2
                        text-blue-500 underline border-2">{diagram.text}</div> 
                    )
                  })}
          </div>
          
        </div>
        {/* desktop view */}
        <div className="hidden sm:flex flex-row">
          {diagrams.map((diagram) => {
              return (
                <a 
                key={diagram.language}
                href={diagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline max-w-fit text-nowrap pt-4 sm:mr-4"
                >{diagram.text}</a> 
              )
            })}
        </div>
      </>
          
    )
  }
  
  export default Diagram