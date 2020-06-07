import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {UserContext} from "../App";
import * as api from "../util/fetch";

const Header = () => {
    const {user} = useContext(UserContext);
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.authRequest();
                setToken(response.user.token);
            } catch (exception) {
                console.log(exception);
                setToken("");
            }
        }
        fetchData();
    }, [user]);

    const tokenInLocal = () => {
        let username = "";
        if (user) {
            username = user.username;
        }
        return (
            <>
                <li className="nav-item">
                    <div
                        className="nav-link"
                    >
                        Hi!, {username}
                    </div>
                </li>
                <li className="nav-item"><NavLink to="/logout" className="nav-link">
                    Logout
                </NavLink></li>
            </>
        );
    }

    const tokenNotInLocal = () => {
        return (
            <>
                <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
            </>
        );
    }

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                    {token === "" ? tokenNotInLocal() : tokenInLocal()}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
