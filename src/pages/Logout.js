import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {UserContext} from "../App";

const Logout = () => {
    const {setUserDetail} = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("jwt");
        setUserDetail(null);
    }

    logout();

    return (
        <Redirect
            to="/"
        ></Redirect>
    );
};

export default Logout;
