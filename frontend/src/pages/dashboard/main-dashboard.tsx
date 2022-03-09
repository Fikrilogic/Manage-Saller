import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./main-dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
          <div className="navbar-brand">Admin Dashboard</div>

          <div>
            <Link to="../login" className="btn btn-warning me-sm-4">
              Sign Out
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex content-container p-0">
        <Sidebar />
        <div className="col-lg-10 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
