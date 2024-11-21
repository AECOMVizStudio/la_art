import { useState } from 'react';
import { VideosExpandableProps } from '../../../../interfaces';
import VideoModal from "./VideoModal"

const VideosExpandable = ({ props }: VideosExpandableProps) => {
  const [expanded, setExpanded] = useState<boolean>(true)

  const expandHandler = () => {
    setExpanded(prev => !prev)
  };

  if (!props || props.length === 0) {
    return <div>No videos currently available</div>
  }
  
  return (
    <div className='mb-4'>

      {/* all versions expandable view */}
      <div>
        <div className="bg-gray-200 flex justify-between p-2 hover:cursor-pointer" onClick={expandHandler}>
          <p className='text-left font-bold'>{props[0].title}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className={expanded ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 hover:pointer' : 'hidden'} >
        {props.map((video) => {
            return (
              <div key={video.vimeoCode} className="flex justify-start items-center sm:items-stretch p-1 mt-1 sm:p-2 border-2 hover:border-burnt-orange">
                <VideoModal video={video} />
              </div>
            )
        })}

        </div>
      </div>
    </div>
  )
}
  
  export default VideosExpandable