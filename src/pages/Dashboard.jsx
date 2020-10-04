import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import logo from "../Assets/logos/logo.png";
import VolunteerList from "../components/Admin/VolunteerList";
import AddEvent from "../components/Admin/AddEvent";

const Dashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="app__dashboard">
      <nav className="app__navbar">
        <div
          className="container"
          style={{ background: "white", borderRadius: "5px" }}
        >
          <div className="row p-4">
            <div className="col-md-3">
              <Link to="/">
                <img src={logo} className="img-fluid w-50" alt="" />
              </Link>
            </div>
            <div className="col-md-9">
              <p className="m-0 app__title">Volunteer register list</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 p-4">
              <div className="sidebar__link">
                <NavLink to="/admin">
                  <i className="fas fa-user-friends"></i>
                  Volunteer register list
                </NavLink>
                <NavLink to={`${url}/addEvent`}>
                  <i className="fas fa-plus"></i>
                  Add Event
                </NavLink>
              </div>
            </div>
            <div className="col-md-9" style={{ background: "#F4F7FC" }}>
              <div className="admin__body p-4">
                <Switch>
                  <Route exact path={path}>
                    <VolunteerList />
                  </Route>
                  <Route path={`${path}/addEvent`}>
                    <AddEvent />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
