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
import FacePage from "./@modules/FacePage/FacePage";
import LipPage from "./@modules/LipPage/LipPage";
import EyePage from "./@modules/Eyepage/EyePage";
import Skincarepge from "./@modules/SkincarePage/Skincarepge";
import OthersPage from "./@modules/Otherspage/OthersPage";

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
              <Route exact path="/face" component={FacePage} />
              <Route exact path="/lip" component={LipPage} />
              <Route exact path="/eye" component={EyePage} />
              <Route exact path="/skin-care" component={Skincarepge} />
              <Route exact path="/other" component={OthersPage} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
