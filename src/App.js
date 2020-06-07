import React, {createContext, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {HashRouter, Route, Switch} from "react-router-dom";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";

export const UserContext = createContext(null);

const App = () => {
    const [user, setUser] = useState(null);

    const setUserDetail = (userDetail) => {
        setUser(userDetail);
    }

    return (
        <UserContext.Provider value={{user, setUserDetail}}>
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/login"><Auth/></Route>
                    <Route path="/logout"><Logout/></Route>
                </Switch>
                <Footer/>
            </HashRouter>
        </UserContext.Provider>
    );
};

export default App;
