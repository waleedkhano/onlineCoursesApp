import { useEffect, useState } from "react";
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/user";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
    const [email, setEmail] = useState('')

    const {message, error} = useSelector(state => state.profile)

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        // dispatch(forgetPassword(email))
        toast.error("Sorry this is a demo site")
    }

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

    return (
        <>
            <div className="loginContainer">
                <h1>Forget Password</h1>
                <form onSubmit={submitHandler} >
                    <input type="email" placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type='submit'>Send Link</button>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword;