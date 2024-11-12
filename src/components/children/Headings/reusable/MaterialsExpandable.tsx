import { useState } from 'react';
import { MaterialsExpandableProps } from '../../../../interfaces';

const MaterialsExpandable = ({ props }: MaterialsExpandableProps) => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const expandHandler = () => {
    setExpanded(prev => !prev)
  }

  return (
    <div className='mb-4'>
      {/* mobile view */}
      <div className='lg:hidden' onClick={expandHandler}>
        <div className="bg-gray-200 flex justify-between p-2 hover:cursor-pointer">
          <p className='text-left font-bold'>{props[0].document}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className={expanded ? 'grid grid-cols-4 gap-0' : 'hidden'}>
          {props.map((material) => {
            return (
              <div key={material.key} className="flex justify-start items-stretch p-2 text-blue-500 underline border-2">
                <a href='{material.ref}'>{material.label}</a>
              </div>
            )
          })}
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden lg:flex min-w-full justify-normal">
        <p className='px-2 py-4 border-y-4 font-bold w-1/4'>{props[0].document}</p>
        {props.map((material) => {
          return (
            <div  className='border-t-4 border-b-4 border-l-2 flex items-center justify-center lg:px-2 xl:px-4'
            key={material.key}>
              <a
                href={material.ref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 semibold underline"
              >{material.label}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
  
  export default MaterialsExpandable