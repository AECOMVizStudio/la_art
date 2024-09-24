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


    return (
      <>
        <p className="font-medium pt-4">
          To view a diagram of the LASHP GPA Process, click on your preferred language, below: 
        </p>
          <div className="flex flex-col">
            {diagrams.map((diagram) => {
                return (
                  <a 
                  key={diagram.language}
                  href={diagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline max-w-fit pt-4"
                  >{diagram.text}</a> 
                )
              })}
          </div>
      </>
          
    )
  }
  
  export default Diagram