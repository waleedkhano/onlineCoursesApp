import axios from 'axios';

export const updateProfile = (name, email) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfileRequest" }); 
        const { data } = await axios.put("/updateprofile", { name, email }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        
        dispatch({ type: "updateProfileSuccess", payload: data.message }); 
      } catch (error) {
        dispatch({ type: "updateProfileFail", payload: error.response.data.message }); 
      }
    };

export const updateProfilePicture = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfileRequest" }); 
        const { data } = await axios.put("/updateprofilepicture", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });
        
        dispatch({ type: "updateProfileSuccess", payload: data.message }); 
      } catch (error) {
        dispatch({ type: "updateProfileFail", payload: error.response.data.message }); 
      }
    };


export const changepassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: "changePasswordRequest" }); 
        const { data } = await axios.put("/changepassword", { oldPassword, newPassword }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        
        dispatch({ type: "changePasswordSuccess", payload: data.message }); 
      } catch (error) {
        dispatch({ type: "changePasswordFail", payload: error.response.data.message }); 
      }
    };
