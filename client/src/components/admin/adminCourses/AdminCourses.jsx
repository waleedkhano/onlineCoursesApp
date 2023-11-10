import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar'
import CoursePopUp from './CoursePopUp';
import './admincourses.css';
import { useDispatch, useSelector } from 'react-redux'
import { allCourses, allLectures } from '../../../redux/actions/course';
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin';
import { toast } from 'react-hot-toast';

const AdminCourses = () => {
    const [popupBtn, setPopupBtn] = useState(false)
    const [courseId, setcourseId] = useState("")
    const [coursetitle, setcoursetitle] = useState("")

    const { courses, lectures, } = useSelector(state => state.course)
    console.log(courses)
    const { error, message } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    const courseDetail = (courseId, title) => {
        dispatch(allLectures(courseId))
        setcourseId(courseId)
        setcoursetitle(title)
        setPopupBtn(true)
    }
    const deletehandler = courseId => {
        dispatch(deleteCourse(courseId))
    }

    const deleteLectureBtn = async (courseId, lectureId) => {
        await dispatch(deleteLecture(courseId, lectureId))
        dispatch(allLectures(courseId))
    }

   
  const addLectureHandler = async ( title, description, video) => {
    const myForm = new FormData();

    myForm.set('title', title);
    myForm.set('description', description);
    myForm.set('file', video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(allLectures(courseId))
};

    useEffect(()=>{
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
          }
          if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
          }
        dispatch(allCourses())
    },[dispatch, error, message])

    const Row = ({ item, deletehandler, courseDetail }) => {
        return (
            <tr className='rowFunction'>
                <td>{item._id}</td>
                <td>
                    <img src={item.poster.url} alt="poster" />
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.createdBy}</td>
                <td>{item.views}</td>
                <td>{item.numOfVideos}</td>
                <td>
                <button onClick={() => courseDetail(item._id, item.title)}> View Lectures</button>
                    <button onClick={() => deletehandler(item._id)}>Delete</button>
                </td>
            </tr>
        );
    }


    return (
        <>
            <div className="adminCoursesContainer">
                <div className="adminCourses">
                    <h1>All Avaliable Courses</h1>
                    <table>
                        <div className="adminTable">
                            <thead>
                                <tr className='tableRow'>
                                    <th>Id</th>
                                    <th>Poster</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Creator</th>
                                    <th>Views</th>
                                    <th>Lectures</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item) => (
                                    <Row
                                        courseDetail={courseDetail}
                                        deletehandler={deletehandler}
                                        key={item._id}
                                        item={item}
                                    />
                                ))}
                            </tbody>
                        </div>
                    </table>
                    <CoursePopUp 
                      trigger={popupBtn}
                      setTrigger={setPopupBtn}
                      id={courseId}
                      title={coursetitle}
                      addLecture={addLectureHandler} 
                      lectures={lectures}
                      deleteBtn={deleteLectureBtn}
                    />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default AdminCourses;
