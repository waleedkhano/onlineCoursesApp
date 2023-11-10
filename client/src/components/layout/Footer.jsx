import './footer.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <h1>connect with us through social media</h1>
               <div className="">
               <a href="https://www.linkedin.com/in/waleed-khano/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/waleedkhano" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
               </div>

            </div>
        </>
    )
}

export default Footer;