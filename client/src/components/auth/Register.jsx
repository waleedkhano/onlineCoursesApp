import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { registerForm } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleAvatarChange = (e) => {
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setAvatarPreview(reader.result);
    //     setAvatar(file)
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const formHandler = (e) =>{
    e.preventDefault();
    // const myForm = new FormData();

    // myForm.append("name", name)
    // myForm.append("email", email)
    // myForm.append("password", password)
    // myForm.append("file", avatar)

    // dispatch(registerForm(myForm))
    toast.error("Sorry this is a demo site")


  }

  return (
    <>
      <div className="loginContainer">
        <h1>Register</h1>
        
      

        <form action="POST" onSubmit={formHandler}>


          {/* Add avatar preview here */}
          <div className="preAvator">
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <FaRegUserCircle size={100} />
            )}
          </div>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* for Avatar */}
          <div className="avator">
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>


          <button type="submit">Register Now</button>
          <div className="loginLinks">
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
