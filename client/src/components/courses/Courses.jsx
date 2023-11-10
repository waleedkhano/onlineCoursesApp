import { useEffect, useState } from "react";
import './courses.css';
import Course from "./Course";
import {useDispatch, useSelector} from 'react-redux';
import { allCourses } from "../../redux/actions/course";
import toast from 'react-hot-toast'

const Courses = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("")
    const [category, setcategory] = useState("")



    const categories = [
        'Web Development',
        'Machine Learning',
        'Mobile App Dev',
    ];

    const {courses, error} = useSelector(state=>state.course)

    useEffect(()=>{
        dispatch(allCourses(category, keyword))

        if(error){
            toast.error(error)
            dispatch({type: 'clearError'})
        }

    }, [category, keyword, dispatch, error]);

    return (<>
        <div className="coursesContainer">
            <h1>All Courses</h1>

            <input type="text" value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a course' />


            <div className="coursesBtn">
                {
                    categories.map((item, index) => (
                        <button key={index} onClick={() => setcategory(item)}>
                            <p>{item}</p>
                        </button>
                    ))
                }
            </div>
            <div className="courseContainer">
               
               {
                courses.length > 0 ? (
                    courses.map((item)=>(
                        <Course 
                        key={item._id}
                        id={item._id}
                        courseId={item._id}
                        img = {item.poster.url}
                        title = {item.title}
                        content = {item.description}
                        creator = {item.createdBy}
                        leacture = {item.numOfVideos}
                        views = {item.views} 
                         />
                    ))
                ): (
                    <>
                    <h1>Courses Not Found</h1>
                    </>
                )
               }
                 
                </div>
        </div>


    </>)
}

export default Courses;