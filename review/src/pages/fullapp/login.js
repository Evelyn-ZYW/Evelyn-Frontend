import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {

    /*
        do an axios call to check if username & password exist in the database (SELECT)

        server will return a token if it exists
            store the token in the storage
            connect token with axios header
            redirect to message/user
        otherwise show error
    */

    const history = useHistory();
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState(null);

    const HandleLogin = async () => {
        const resp = await axios.post("https://advdyn2021.herokuapp.com/user_login", { username: un, password: pass });
        console.log(resp);
        if (resp.data !== "Something went wrong logging in") {
            const token = resp.data;
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/profile");
        } else {
            //update a state to show an error
            setError("Incorrect username/password!");
        }
    }

    /*
        do an axios call to the server to create a username & password
 
        BASED ON DESIGN PHILOSOPHY
        if created, a token will get sent over
            store the token in the storeage
            connect token with axios header
            redirect to message/user
 
        OR
 
        if created
            send them back to the login page to login
    */
    return <div>
        <h3>Login</h3>
        <input type="text" onChange={(e) => setUn(e.target.value)} placeholder="username" />
        <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="password" />
        <button onClick={HandleLogin}>Login</button>
        <div>
            {error}
        </div>
    </div>
}

export default Login;