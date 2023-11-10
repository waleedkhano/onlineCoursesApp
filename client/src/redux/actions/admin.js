import axios from 'axios';

export const createCourse = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "createCourseRequest" }); 
        const { data } = await axios.post("/createcourse", formData , {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });
        
        dispatch({ type: "createCourseSuccess", payload: data.message }); 
      } catch (error) {
        dispatch({ type: "createCourseFail", payload: error.response.data.message }); 
      }
    };



export const deleteCourse = id => async (dispatch) => {
    try {
        dispatch({ type: "deleteCourseRequest" }); 
        const { data } = await axios.delete(`/course/${id}` , {
          withCredentials: true,
        });
        
        dispatch({ type: "deleteCourseSuccess", payload: data.message }); 
      } catch (error) {
        dispatch({ type: "deleteCourseFail", payload: error.response.data.message }); 
      }
    };
export const addLecture = (id, formdata) => async (dispatch) => {
    try {
        dispatch({ type: "addLectureRequest" }); 
        const { data } = await axios.post(`/course/${id}` ,formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });
        
        dispatch({ type: "addLectureSuccess", payload: data.message }); 
      } catch (error) {

        dispatch({ type: "addLectureFail", payload: error.response.data.message }); 
      }
    };

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
    try {
        dispatch({ type: "deleteLectureRequest" }); 
        const { data } = await axios.delete(`/lecture?courseId=${courseId}&lectureId=${lectureId}` ,{
          withCredentials: true,
        });
        
        dispatch({ type: "deleteLectureSuccess", payload: data.message }); 
      } catch (error) {

        dispatch({ type: "deleteLectureFail", payload: error.response.data.message }); 
      }
    };


    export const allUsers = () => async (dispatch) => {
      try {
          dispatch({ type: "allUsersRequest" }); 
          const { data } = await axios.get(`/admin/users` , {
          
            withCredentials: true,
          });
          
          dispatch({ type: "allUsersSuccess", payload: data.users }); 
        } catch (error) {
  
          dispatch({ type: "allUsersFail", payload: error.response.data.message }); 
        }
      };

    export const updateUserRole = (id) => async (dispatch) => {
      try {
          dispatch({ type: "updateUserRoleRequest" }); 
          const { data } = await axios.put(`/admin/user/${id}` ,{}, {
          
            withCredentials: true,
          });
          
          dispatch({ type: "updateUserRoleSuccess", payload: data.message }); 
        } catch (error) {
  
          dispatch({ type: "updateUserRoleFail", payload: error.response.data.message }); 
        }
      };


    export const deleteUser = (id) => async (dispatch) => {
      try {
          dispatch({ type: "deleteUserRequest" }); 
          const { data } = await axios.delete(`/admin/user/${id}` , {
          
            withCredentials: true,
          });
          
          dispatch({ type: "deleteUserSuccess", payload: data.message }); 
        } catch (error) {
  
          dispatch({ type: "deleteUserFail", payload: error.response.data.message }); 
        }
      };


    export const dashboardStats = () => async (dispatch) => {
      try {
          dispatch({ type: "adminStatsRequest" }); 
          const { data } = await axios.get(`/admin/stats` , {
          
            withCredentials: true,
          });

          console.log(data)
          
          dispatch({ type: "adminStatsSuccess", payload: data }); 
        } catch (error) {
  
          dispatch({ type: "adminStatsFail", payload: error.response.data.message }); 
        }
      };
