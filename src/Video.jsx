
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const Video = forwardRef((props, ref) => {
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        },
        pause: () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    }));

    return (
        <video ref={videoRef} width="600" controls>
            <source src="/src/assets/videos/video-1.mp4" type="video/mp4" />
        </video>
    );
});

export default Video;
