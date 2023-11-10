import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/course';
import './course.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Course = (props) => {
  const dispatch = useDispatch();

  const addToPlayList = (courseId) => {
    dispatch(addToPlaylist(courseId))
  }


  const { message, error } = useSelector(state => state.course)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }

  }, [message, dispatch, error]);

  return (
    <div className="courseData">
      <img src={props.img} alt="course-img" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <h5>{`Creator: ${props.creator}`}</h5>
      <h5>{`Lectures: ${props.leacture}`}</h5>
      <h5>{`views: ${props.views}`}</h5>
      <div className="courseBtn">
        <Link to={`/course/${props.id}`}>
          <button>Watch Now</button>
        </Link>
        <button onClick={() => addToPlayList(props.courseId)}>Add to Playlist</button>
      </div>
    </div>
  );
};

export default Course;
