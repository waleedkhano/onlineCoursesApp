import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" }); // Dispatch the "loginRequest" action to indicate login request start
    const { data } = await axios.post("/login", { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    
    dispatch({ type: "loginSuccess", payload: data }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};

export const registerForm = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" }); // Dispatch the "loginRequest" action to indicate login request start
    const { data } = await axios.post("/register", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    
    dispatch({ type: "registerSuccess", payload: data }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};



export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" }); 

    const { data } = await axios.get("/me", {
      withCredentials: true,
    });
    
    dispatch({ type: "loadUserSuccess", payload: data.user }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};


export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" }); 

    const { data } = await axios.get("/logout", {
      withCredentials: true,
    });
    
    dispatch({ type: "logoutSuccess", payload: data.message }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};



export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `/forgetpassword`,
      {
        email,
      },
      config
    );

    dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};


export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    };

    const { data } = await axios.put(
      `/resetpassword/${token}`,
      {
        password,
      },
      config
    );

    dispatch({ type: 'resetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error.response.data.message,
    });
  }
};
