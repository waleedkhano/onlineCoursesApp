import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/user'
import './login.css';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return(
        <>
        <div className="loginContainer">
            <h1>Login</h1>
            <form action="POST" onSubmit={submitHandler}>
            <input type="email" placeholder='Email Address'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
            <button type='submit'>Login</button>
            <div className="loginLinks">
            <Link to="/forgetpassword">Forget Password</Link>
            <Link to="/register">Don't have an account?</Link>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;