import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const history = useHistory();
    /*
        check for a token when the page loads - useEffect
        if a token exists
            connect token with axios header
            redirect them to message/user
        otherwise let them choose to login or register
    */

    const CheckToken = async () => {
        //assume we will store the token in the sessionStorage
        const token = await sessionStorage.getItem("token");
        console.log("token", token)
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/profile");
        }
    }

    useEffect(() => {
        //when the page loads, do the following
        CheckToken()
    }, [])

    return <div>
        <button onClick={() => history.push("/login")}>Login</button>
        <button onClick={() => history.push("/register")}>Sign Up!</button>
    </div>
}

export default Main;