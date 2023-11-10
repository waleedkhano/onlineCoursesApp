import { useState } from 'react';
import './profile.css';
import {useDispatch} from'react-redux';
import {updateProfile} from '../../redux/actions/profile'
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) =>{
    const navigate = useNavigate();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const dispatch = useDispatch();
    const sumbitHandler = (e) =>{
        e.preventDefault();
        dispatch(updateProfile(name, email))
        navigate('/profile')
    }

    return(
        <>
        <div className="changePasswordContainer">
            <form onSubmit={sumbitHandler}>
            <h1>Update Profile</h1>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type='submit'>Update Profile</button>
            </form>
        </div>
        </>
    )
}

export default UpdateProfile;