import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    
    const history = useHistory();
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");

    const HandleRegister = async () => {
        const resp = await axios.post("https://advdyn2021.herokuapp.com/user_register", { username: un, password: pass });
        console.log(resp);
        if (resp.data !== "Something went wrong registering user") {
            history.push("/login");
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
        <h3>Register</h3>
        <input type="text" onChange={(e) => setUn(e.target.value)} placeholder="username" />
        <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="password" />
        <button onClick={HandleRegister}>Register to the Platform</button>
    </div>
}

export default Register;