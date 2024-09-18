import { useRef } from 'react';
import Video from '../../Video'; 

function UseImperativeHandle() {
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    
    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div>
            <Video ref={videoRef} />
          
        </div>
    );
}

export default UseImperativeHandle;
