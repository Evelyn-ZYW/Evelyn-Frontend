import React, { useEffect } from 'react';
import axios from 'axios';

const User = () => {

    /*
        check if token is expired or if there is a token at all
            if not redirect back to login

        axios call to get my user profile
        axios call to update my user profile
    */
    const CheckToken = async () => {

    }

    useEffect(() => {
        CheckToken(); //when the page loads, check if the token is expired or not
    }, []);

    return <div>User</div>
}

export default User;