import { useState } from 'react'

import { ExpandableProps } from '../../../../interfaces';


const Expandable = ({ props }: ExpandableProps) => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const expandHandler = () => {
    setExpanded(prev => !prev)
  }

  return (
    <>
      <p className="font-medium pt-4">
        To view a diagram of the LASHP GPA Process, click on your preferred language, below:
      </p>
      {/* mobile view */}
      <div className='sm:hidden' >
        <div className="bg-gray-200 flex justify-between p-2" onClick={expandHandler}>
          <p className='text-center font-bold'>Click to expand</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className={expanded ? 'grid grid-cols-4 gap-0' : 'hidden'}>
          {props.map((diagram) => {
            return (
              <div key={diagram.language} className="flex justify-start items-center p-2 text-blue-500 underline border-2">
                <a href={diagram.href} target="_blank" rel="noopener noreferrer">{diagram.text}</a>
                
              </div>
            )
          })}
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden sm:flex flex-row">
        {props.map((diagram) => {
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
  
  export default Expandable