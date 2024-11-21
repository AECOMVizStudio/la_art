import { useState, memo } from 'react';
import ModalVideo from 'react-modal-video';
import './modal-video.scss';

//types
import { VideoModalProps } from '../../../../interfaces';

const VideoModal = memo(({ video }: VideoModalProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="vimeo"
        vimeo={{ autoplay: true }}
        isOpen={isOpen}
        videoId={video.vimeoCode}
        onClose={() => setOpen(false)}
      />
      <div onClick={() => setOpen(true)} className="z-20 hover:cursor-pointer ">
        <img
          src={video.thumbnailImg}
          alt={video.title}
          className="w-full"
        ></img>
      </div>
    </>
  );
});

export default VideoModal;
