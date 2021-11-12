// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./pages/About/About";
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
