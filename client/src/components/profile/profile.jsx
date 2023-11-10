import { useEffect, useState } from 'react';
import './profile.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfilePicture } from '../../redux/actions/profile';
import { toast } from 'react-hot-toast';
import { removeFromPlaylist } from '../../redux/actions/course';

const Profile = ({ user }) => {

    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    const dispatch = useDispatch();
const { message: profileMessage, error: profileError } = useSelector(state => state.profile);
const { message: courseMessage, error: courseError } = useSelector(state => state.course);

useEffect(() => {
  if (profileError) {
    toast.error(profileError);
    dispatch({ type: 'clearProfileError' }); 
  }
  if (profileMessage) {
    toast.success(profileMessage);
    dispatch({ type: 'clearProfileMessage' });  
  }

  if (courseError) {
    toast.error(courseError);
    dispatch({ type: 'clearCourseError' }); 
  }
  if (courseMessage) {
    toast.success(courseMessage);
    dispatch({ type: 'clearCourseMessage' });  
  }
}, [dispatch, profileError, profileMessage, courseError, courseMessage]);

    const removeFromPlaylistHandler = (id) => {
        // console.log(id)
        dispatch(removeFromPlaylist(id))
    }

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

    const updateAvator =  (e) => {
        e.preventDefault();
        if (avatar && avatarPreview !== user.avatar.url) {
            const myForm = new FormData();
            myForm.append('file', avatar);
          dispatch(updateProfilePicture(myForm))
        }
    }

    return (
        <>
            <div className="profileContainer">
                <h1>PROFILE</h1>
                <div className="avatorImg">
                    {/* Add avatar preview here */}
                    <div className="avatorIcon">
                        {avatarPreview ? (
                            <img src={avatarPreview} alt="Avatar Preview" />
                        ) : user.avatar.url ? (
                            <img src={user.avatar.url} alt="Avatar Preview" />
                        ) : (
                            <FaRegUserCircle size={250} />
                        )}
                    </div>



                    <div className="avatar">
                        <form onSubmit={updateAvator}>
                        <input id="avatar-input" type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
                        <label htmlFor="avatar-input" className='click'>Change Photo</label>
                        <button type='submit'>Submit Photo Changes</button>
                        </form>
                    </div>

                </div>
                <div className="userdata">
                    <div className="userName">
                        <h3>Name </h3>
                        <p>{user.name}</p>
                    </div>
                    <div className="userName">
                        <h3>Email </h3>
                        <p>{user.email}</p>
                    </div>
                    <div className="userName">
                        <h3>CreatedAt </h3>
                        <p>{user.createdAt.split("T")[0]}</p>
                    </div>
                    {
                        user.role !== "admin" &&
                        <div className="userAdmin">
                            <h3>Subscription </h3>
                            {
                                user.subscription && user.subscription.status === "active" ? (
                                    <button>Cancel Subscription</button>
                                ) : (
                                    <Link to='/subscribe'>
                                        <button>Subscribe</button>
                                    </Link>
                                )
                            }
                        </div>
                    }
                    <div className="profilebtn">
                        <Link to="/updateprofile">
                            <button>Update Profile</button>
                        </Link>
                        <Link to="/changepassword">
                            <button>Change Password</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="userPlaylist">
                <h2>PlayList</h2>
                {
                    user.playlist.length > 0 && (
                        <div className="playlist">
                            {user.playlist.map((item) => (
                                <div className="playlistimg" key={item.course}>
                                    <img src={item.poster} alt="Playlist Img" />
                                    <Link to={`/course/${item.course}`}>
                                        <button>watch Now</button>
                                    </Link>
                                    <button onClick={() => removeFromPlaylistHandler(item.course)}>
                                        <RiDeleteBin7Fill /> Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Profile;