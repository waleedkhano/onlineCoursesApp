import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './contact.css';
import { contactUs } from '../../redux/actions/contact';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();
    const { error, message:stateMessage} = useSelector(state=> state.contact)

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(contactUs(name, email, message))
        setName('')
        setEmail('')
        setMessage('')
        toast.error("Please Login to user account")
    }

    useEffect(()=>{
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
          }
          if (stateMessage) {
            toast.success(stateMessage);
            dispatch({ type: 'clearMessage' });
          }
    },[dispatch, error, stateMessage])

    return (
        <>
            <div className="contactContainer">

                <h1>Contact Us</h1>

                <form action="POST" onSubmit={submitHandler}>

                <input type="text" placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input type="email" placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea placeholder='Enter your Message...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button type='submit'>Send Mail</button>

                    <div className="requestLinks">
                    Request for a course <Link to="/request">Click here</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Contact;