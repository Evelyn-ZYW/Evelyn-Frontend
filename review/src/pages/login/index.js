import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from 'comps/Items';
import { Link, useHistory } from 'react-router-dom';

//ENDPOINTS
//login -> token
//verify -> token expired, no token, data of the token - to make sure we are still authorized to route
//restricted -> if you don't have the secret data from the token. you wont't be allow to connect to the endpoint

// let token = null;

const Login = () => {
    const history = useHistory();
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [showLogin, setShow] = useState(true);

    const CheckStorage = async () => {
        var token = await sessionStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            var resp = await axios.get("https://advdyn2021.herokuapp.com/verify");
            console.log("verification", resp.data);
            if (resp.data !== "expired") {
                //hide login
                // setShow(false);
                history.push("/read");
            }
        }
    }

    const Auth = async () => {
        var resp2 = await axios.post("https://advdyn2021.herokuapp.com/login",
            {
                username: un, //student
                password: pass //mdia3109
            }
        );

        // token = resp2.data;

        axios.defaults.headers.common['Authorization'] = resp2.data; //default
        sessionStorage.setItem("token", resp2.data); //storing the token in sessionStorage
        setShow(false);
        //after logging in, reroute them with history.push("/read");

        console.log("identifier/token", resp2.data);
    }

    const Restricted = async () => {
        //create a new post endpoint
        var resp = await axios.post("https://advdyn2021.herokuapp.com/restricted",
            {
                //nothing to post, pretend to post something over to create
                itemname: "item 1"
            },
            // {
            //     headers: {
            //         'Authorization': `${token}`
            //     }
            // }
        )
        console.log("restricted: ", resp.data)
    }

    useEffect(() => {
        CheckStorage();
    }, [])

    return <div>
        {showLogin && <>
            <input type="text" placeholder="username" onChange={(e) => setUn(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
            <button onClick={Auth}>Login in</button>
        </>
        }
        <button onClick={Restricted}>Restricted</button>
    </div>
}
export default Login;