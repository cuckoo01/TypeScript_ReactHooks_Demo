
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
        <video ref={videoRef} width="600" height="300" controls>
            <source src='https://www.w3schools.com/html/mov_bbb.mp4' type="video/mp4" />
        </video>
    );
});

export default Video;
