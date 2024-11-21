import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import './modal-video.scss'



const VideoModal = () => {

const [isOpen, setOpen] = useState(false);
  return (
    <>
        <ModalVideo
            channel='vimeo'
            vimeo={{ autoplay: true }}
            isOpen={isOpen}
            videoId='1031612219'
            onClose={() => setOpen(false)}
            
        />
        <button onClick={() => setOpen(true)}>Open</button>
    </>
  )
}

export default VideoModal