import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./pages/Register";
import EventTasks from "./pages/EventTasks";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import auth from "./firebase.config";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ email: "" });
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        setUser(authUser);
        setLoggedInUser({
          email: authUser.email,
          displayName: authUser.displayName,
        });

        if (authUser.displayName) {
          // don't update username
        } else {
        }
      } else {
        // user has logged out
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user]);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />

            <PrivateRoute path="/register/:_id">
              <Register />
            </PrivateRoute>

            <Route path="/eventTasks" component={EventTasks} />

            {/* admin routes */}
            <Route path="/admin" component={Dashboard} />

            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </userContext.Provider>
  );
}

export default App;
