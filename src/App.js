import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./pages/About/About";
import AddNewLamp from "./pages/Dashboard/AddNewLamp/AddNewLamp";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import ManageAllCarts from "./pages/Dashboard/ManageAllCarts/ManageAllCarts";
import MyCart from "./pages/Dashboard/MyCart/MyCart";
import Payment from "./pages/Dashboard/Payment/Payment";
import Review from "./pages/Dashboard/Review/Review";
import Home from "./pages/Home/Home/Home";
import LampDetails from "./pages/Lamps/LampDetails/LampDetails";
import Lamps from "./pages/Lamps/Lamps/Lamps";
import Login from "./pages/login/Login/Login";
import PrivateRoute from "./pages/login/PrivateRoute/PrivateRoute";
import Register from "./pages/login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/shared/Footer/Footer";
import Navigation from "./pages/shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/lamps">
              <Lamps></Lamps>
            </Route>

            <PrivateRoute exact path="/lamps/:lampId">
              <LampDetails></LampDetails>
            </PrivateRoute>

            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute exact path="/mycart">
              <MyCart></MyCart>
            </PrivateRoute>

            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute exact path="/manageallcarts">
              <ManageAllCarts></ManageAllCarts>
            </PrivateRoute>

            <PrivateRoute exact path="/addnewlamp">
              <AddNewLamp></AddNewLamp>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
