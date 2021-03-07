import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

const Message = () => {
    const history = useHistory();

    const [msg, setMsg] = useState("");
    const [mymsgs, setMymsgs] = useState([]);
    const [allmsgs, setAllmsgs] = useState([]);

    /*
        check if token is expired or if there is a token at all
            if not redirect back to login

        axios call to get all the messages
        axios call to get MY messages
        axios call to do other things with messages like create, update etc.    
    */
    const HandleCreate = async () => {
        const resp = await axios.post("https://advdyn2021.herokuapp.com/createmessage", { message: msg });
        if (resp.data !== "expired" && resp.data !== "no token") {
            //message created! read the message later...
            GetMessages();//whenever I create a new message, I am gonna get the messages again
        } else {
            history.push("/login");
        }
    }
    const GetMessages = async () => {
        const resp = await axios.get("https://advdyn2021.herokuapp.com/message/user");
        if (resp.data !== "expired" && resp.data !== "no token") {
            setMymsgs([...resp.data])
        }
    }
    const GetAllMessages = async () => {
        const resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages");
        if (resp.data !== "expired" && resp.data !== "no token") {
            setAllmsgs([...resp.data])
        }
    }
    useEffect(() => {
        GetMessages();//get the message the currect user created
        GetAllMessages();//get all messages all different users created
    }, [])
    return <div>
        <h3>Message</h3>
        <input type="text" onChange={(e) => setMsg(e.target.value)} />
        <button onClick={HandleCreate}>Create Message</button>

        <div>
            <h3>My Messages</h3>
            {mymsgs.map((o, i) => <div key={i}>{o.message}</div>)}
        </div>

        <div>
            <h3>All Messages</h3>
            {allmsgs.map((o, i) => <div key={i}>{o.message}</div>)}
        </div>
    </div>
}

export default Message;