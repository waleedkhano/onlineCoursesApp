import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';
import './user.css';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, deleteUser, updateUserRole } from '../../../redux/actions/admin';
import Loader from '../../layout/loader/Loader';
import { toast } from 'react-hot-toast';

const User = () => {
  const { users, loading, error, message } = useSelector(state => state.admin);
  const dispatch = useDispatch();

  const updatehandler = userId => {
    dispatch(updateUserRole(userId));
  };

  const deletehandler = userId => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(allUsers());
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="userContainer">
          <div className="user">
            <h1>All Users</h1>
            <table>
              <thead>
                <tr className="tableRow">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>SUBSCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map(item => <Row updatehandler={updatehandler} deletehandler={deletehandler} key={item._id} item={item} />)}
              </tbody>
            </table>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default User;

function Row({ item, deletehandler, updatehandler }) {
  return (
    <tr className="rowFunction">
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>{item.subscription && item.subscription.status === 'Active' ? 'Active' : 'Not Active'}</td>
      <td>
        <button onClick={() => updatehandler(item._id)}>Change Role</button>
        <button onClick={() => deletehandler(item._id)}>Delete</button>
      </td>
    </tr>
  );
}
