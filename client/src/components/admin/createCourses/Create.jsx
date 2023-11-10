import { useEffect, useState } from "react";
import Sidebar from "../Sidebar"
import './create.css';
import { BsImageAlt } from 'react-icons/bs';
import {createCourse} from '../../../redux/actions/admin'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from "react-hot-toast";

const Create = () => {

    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [avator, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");

    const dispatch = useDispatch();
    const {message, error} = useSelector(state=>state.admin)
    const categories = [
        'Web Development',
        'Data Science',
        'Machine Learning',
        'Game Development',
        'Mobile App Dev',
    ];

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarPreview(reader.result);
                setAvatar(file)
            };
            reader.readAsDataURL(file);
        }
    };


    const submitHandler = (e) =>{
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("title", title)
        myForm.append("description", Description)
        myForm.append("category", selectedCategory)
        myForm.append("createdBy", createdBy)
        myForm.append("file", avator)
    
        dispatch(createCourse(myForm))
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
            <div className="createContainer">
                <div className="create">
                    <h1>CREATE COURSE</h1>
                    <form onSubmit={submitHandler}>
                        {/* Add avatar preview here */}
                        <div className="preAvator">
                            {avatarPreview ? (
                                <img src={avatarPreview} alt="Avatar Preview" />
                            ) : (
                                <BsImageAlt size={100} />
                            )}
                        </div>
                        <input type="text" placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />

                        <input type="text" placeholder="Description"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)} />

                        <input type="text" placeholder="Created By"
                            value={createdBy}
                            onChange={(e) => setCreatedBy(e.target.value)} />

                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option>Select Category</option>
                            {
                                categories.map(item => (
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>

                        <div className="avator">
                            <input type="file" accept="image/*" onChange={handleAvatarChange} />
                        </div>

                        <button type="submit">Create</button>

                    </form>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default Create;