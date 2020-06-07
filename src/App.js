import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";

const App = () => {

  // TODO: Context API 활용하여 전역에서 User 상태 관리

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/login"><Auth/></Route>
        <Route path="/logout"><Logout/></Route>
      </Switch>
      <Footer/>
    </HashRouter>
  );
};

export default App;
