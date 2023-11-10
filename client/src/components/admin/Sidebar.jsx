import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <>
      <LinkButton url="dashboard" icon={RiDashboardFill} text="Dashboard" />
      <LinkButton url="createcourse" icon={RiAddCircleFill} text="Create Course" />
      <LinkButton url="courses" icon={RiEyeFill} text="Courses" />
      <LinkButton url="users" icon={RiUser3Fill} text="Users" />
    </>
  );
};

export default Sidebar;

function LinkButton(props) {
  return (
    <div className="btn">
    <Link to={`/admin/${props.url}`}>
      <button>
        {<props.icon />} {props.text}
      </button>
    </Link>
    </div>
  );
}
