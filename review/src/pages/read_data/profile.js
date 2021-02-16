import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

//axios https://advdyn2021.herokuapp.com/allusers -> get all users
//axios https://advdyn2021.herokuapp.com/alldiscussions -> get all discussions
//axios https://advdyn2021.herokuapp.com/user_by_id/5 -> get a single user by it's id

const Profile = () => {
    const [p, setP] = useState({});
    const params = useParams()
    const GetData = async () => {
        // var resp3 = axios.get("https://advdyn2021.herokuapp.com/allusers");
        // setDs([...resp2.data]);
        var resp = await axios.get("https://advdyn2021.herokuapp.com/user_by_id/"+params.id);
        console.log(resp)
        setP({...resp.data[0]});
    }
    useEffect(() => {
        GetData();
    }, [])
    return <div>
      <h1>Name: {p.name}</h1>
      <h2>Age: {p.age}</h2>
      <h3>Bio: {p.bio}</h3>
    </div>
}
export default Profile;