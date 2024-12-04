import { useRef, useState } from "react";
import playButton from "../../assets/icons/play-button.svg"
const Video = () => {

    const [play, setPlay] = useState(true);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const togglePlay = () =>{
        if(play) videoRef.current?.pause();
        else{
            videoRef.current?.play();
        }
        setPlay(!play);
    }

    return ( 
        <div className=" w-full relative" onClick={togglePlay}>
            <video id="blockdda25d67c3efc34143f17b0c704c6954_html5_api" className="w-full" poster="https://storage.googleapis.com/adforum-media/34709214/ad_34709214_dee1fbd66e841255_tn.jpg" autoPlay={play} ref={videoRef}>
                <source src="https://storage.googleapis.com/adforum-media/34709214/ad_34709214_02694bce6851851a_web.mp4" type="video/mp4" itemProp="contentUrl" />
            </video>
            <div className={`w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 ${play &&`hidden`} transition duration-1000`}></div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${play &&`hidden`}`}>
                <img src={playButton} alt="play button" />
            </div>
        </div>
     );
}
 
export default Video;