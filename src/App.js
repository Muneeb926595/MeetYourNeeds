import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Provider } from "react-redux";

import MobileMainScreen from "./@modules/MainScreen/MainScreen";
import Signup from "./@modules/SignUp/Signup";
import Login from "./@modules/Login/Login";
import Layout from "./@layouts/Layout";
import store from "./@store";
import Home from "./@modules/Home/Home";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer />
        <div className="background"></div>
        <Router>
          <Switch>
            <Route exact path="/" component={MobileMainScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Layout>
              <Route exact path="/home" component={Home} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
