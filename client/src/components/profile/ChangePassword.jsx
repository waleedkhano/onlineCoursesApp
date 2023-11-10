import { useEffect, useState } from 'react';
import './profile.css';
import {changepassword} from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';


const ChangePassword =() =>{
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const dispatch = useDispatch();

    const { message, error } = useSelector((state) => state.profile)

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
    }, [dispatch, error, message]);
  
    const changePassword = (e) =>{
        e.preventDefault();
        dispatch(changepassword(oldPassword, newPassword))
    }

    return(
        <>
        <div className="changePasswordContainer">
            <form onSubmit={changePassword}>
            <h1>Change Password</h1>
                <input type="password" placeholder='Old Password' value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}/>
                <input type="password" placeholder='New Password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                <button type='submit'>Change</button>
            </form>
        </div>
        </>
    )
}

export default ChangePassword;