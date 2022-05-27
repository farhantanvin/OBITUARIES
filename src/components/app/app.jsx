import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import CreateObituaryScreen from "../createObituaryScreen";
import Footer from "../footer";
import GetQuoteScreen from "../getQuoteScreen";
import LandingScreen from "../landingScreen";
import Navbar from "../navbar";
import ObituariesScreen from "../obituariesScreen";
import ObituariesVideoComponent from "../obituariesVideoScreen/ObituariesVideoScreen";
import ObituaryScreen from "../obituaryScreen";
import PricingScreen from "../pricingScreen";
import SignInScreen from "../signInScreen";
import SignUpScreen from "../signUpScreen";

function App(props) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(
      !(
        window.location.pathname === "/" ||
        window.location.pathname.includes("sign-up") ||
        window.location.pathname.includes("sign-in")
      )
    );
  }, [props]);
  
  return (
    <div>
      <Switch>
        <Route path="/" component={SignInScreen} exact />
        <Route path="/sign-in" component={SignInScreen} exact />
        <Route path="/sign-up" component={SignUpScreen} exact />
        <>
          <Navbar></Navbar>
          <Route path="/dashboard" component={LandingScreen} exact />
          <Route path="/get-quote" component={GetQuoteScreen} exact />
          <Route
            path="/create-obituary"
            component={CreateObituaryScreen}
            exact
          />
          <Route path="/obituaries" component={ObituariesScreen} exact />
          <Route path="/plans-and-pricing" component={PricingScreen} exact />
          <Route path="/obituary/:id" component={ObituaryScreen} exact />
          <Route path="/video" component={ObituariesVideoComponent} exact />
        </>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
