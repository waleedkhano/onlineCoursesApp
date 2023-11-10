import { Link } from 'react-router-dom';
import bg from '../assets/images/img.png';
import introVideo from '../assets/videos/intro.mp4';
import './home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { DiAws } from 'react-icons/di'
import Footer from './layout/Footer'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="shape"></div>
                <div className="content">
                    <h1 className='lms'>learning  <br /> Management system</h1>
                    <p>Find Valueable Content At Reasonable Price. A plateform for college students  <br /> to learn some skills and prepare for the future</p>
                    <button> <Link to="/courses">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore Now
                    </Link></button>
                </div>
                <div className="img">
                    <img src={bg} alt="Img" />
                </div>
            </div>


            <div className="boxes">
                <h1>Our Brands</h1>
                <CgGoogle />
                <CgYoutube />
                <DiAws />
                <SiCoursera />
                <SiUdemy />
            </div>

            <div className="container2">
                <video autoPlay controls muted controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

                </video>
            </div>
            <Footer />
        </>
    )
}

export default Home;