import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { LineChart, DoughnutChart } from './Chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardStats } from '../../../redux/actions/admin';
import Loader from "../../layout/loader/Loader"

const Databox = ({ title, num, pers, profit }) => (
  <div className="box">
    <p>{title}</p>
    <p>
      <strong>{num} </strong> {pers} {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />}
    </p>
    <p>Since last month</p>
  </div>
);

const Bar = ({ title, progress }) => {
  const [filledWidth, setFilledWidth] = useState(0);

  useEffect(() => {
    setFilledWidth(progress);
  }, [progress]);

  return (
    <div className="bar">
      <h3>{title}</h3>
      <div className="data">
        0% <div className="barLine"><div className="fillBar" style={{ width: `${filledWidth}%` }}></div></div> 100%
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const {loading,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    viewsProfit,
  } = useSelector(state=>state.admin)

  useEffect(() => {
    dispatch(dashboardStats())
  }, [dispatch,])
  console.log('subscriptionCount:', subscriptionCount);
  console.log('usersCount:', usersCount);



  return (
    <>
      <div className="dashboardContainer">
        {
          loading ? <Loader /> :(
            <div className="dashboard">
          <p>{`Last Change was on ${String(new Date()).split('G')[0]}`}</p>
          <h1>Dashboard</h1>
          <div className="databox">
            <Databox title="views" num={viewsCount} pers={viewsPercentage} profit={viewsProfit} />
            <Databox title="Users" num={usersCount} pers={usersPercentage} profit={usersPercentage} />
            <Databox title="Subscription" num={subscriptionCount} pers={subscriptionPercentage} profit={subscriptionPercentage} />
          </div>
          <div className="graph">
            <h2>Views Graph</h2>
      {/* <LineChart views={stats?.map(item => item.views) || []} /> */}
      <LineChart views={[3, 4]} />

          </div>
          <div className="progress">
            <h2>Progress Bar</h2>
            <Bar title="Views" progress={viewsPercentage} />
            <Bar title="Users" progress={usersPercentage} />
            <Bar title="Subscription" progress={subscriptionPercentage} />
          </div>
          <div className="userProgress">
            <h2>Users</h2>
            <DoughnutChart users={[subscriptionCount,usersCount - subscriptionCount]} />
          </div>
        </div>
          )
        }
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
