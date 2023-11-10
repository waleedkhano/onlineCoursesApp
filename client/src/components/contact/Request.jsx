import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../../redux/actions/contact';
import toast from 'react-hot-toast';

const Request = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')

    const dispatch = useDispatch();
    const { error, message} = useSelector(state=> state.contact)
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(courseRequest(name, email, course))
        setName('')
        setEmail('')
        setCourse('')
    }

    useEffect(()=>{
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
          }
          if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
          }
    },[dispatch, error, message])

    return (
        <>
            <div className="contactContainer">

                <h1>Request for the Course</h1>

                <form action="POST" onSubmit={submitHandler}>

                    <input type="text" placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input type="email" placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea placeholder='Explain the Course...'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />

                    <button type='submit'>Send Mail</button>

                    <div className="requestLinks">
                        See all courses <Link to="/courses">Click here</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Request;