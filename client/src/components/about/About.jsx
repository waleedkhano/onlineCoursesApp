import './about.css';
import founder from '../../assets/images/founder.jpg'
import {Link} from 'react-router-dom';

const About = () => {
    return (<>
        <div className="aboutContainer">
            <div className="profile">
                <h1>About Us</h1>
                <img src={founder} alt="founder-img" />
                <p>Co-Founder</p>
            </div>
            <div className="details">
                <h1>Waleed Khano</h1>
                <p>Hi, I am a MERN stack developer, and my mission is to build innovative and robust web applications using the MERN "MongoDB, Express.js, React, and Node.js" technology stack. I am passionate about creating efficient and user-friendly solutions
                    that provide a seamless user experience. With my expertise in frontend and backend development, I strive to deliver high-quality, scalable, and performant applications. I enjoy tackling complex challenges, collaborating with teams, and continuously learning and staying updated with the latest web development trends.</p>
                    <br />
                <p>In the context of an online teaching platform, my mission extends to leveraging the power of technology to revolutionize education and make learning accessible to all. I believe that education should transcend physical boundaries, enabling individuals from diverse backgrounds to acquire knowledge and skills.

                    Through the online teaching platform, I aim to create a dynamic and interactive learning environment that engages students and empowers educators. By utilizing the MERN stack, I can develop a robust and scalable platform that incorporates cutting-edge features such as real-time collaboration, interactive multimedia content, and personalized learning experiences.
                </p>
                <div className="aboutBtn">
                <Link to='/subscribe'>
                    <button>Checkout Our premium plan</button>
                </Link>
                </div>
            </div>
        </div>
    </>)
}

export default About;