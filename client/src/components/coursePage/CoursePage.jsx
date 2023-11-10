import './coursePage.css';
import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';

const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [];



    return <>
        {/* <div className="coursePageContainer">
            <div className="leftSideContainer">
                <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}></video>    
            <div className="videoIntroDetails">
                <h1>
                    {
                        `#${lectureNumber + 1}: ${lectures[lectureNumber].title}`
                    }
                </h1>
                <div className="videoDescription">
                    <h1>Description</h1>
                    <p>{lectures[lectureNumber].description}</p>
                </div>
            </div>
            </div>
            <div className="rightSideContainer">
                {
                    lectures.map((item, index) => (
                        <button key={item._id} onClick={()=>{setLectureNumber(index)}}>
                            #{index + 1} {item.title}
                        </button>
                    ))
                }

            </div>

        </div> */}
        <div className="demo">
            <h1>Just a demo site</h1>
            <p>Courses are not uploaded</p>
        </div>
    </>
}

export default CoursePage;