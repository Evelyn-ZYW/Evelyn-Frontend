import React, { useState } from 'react';

import UsersAccount from 'comps/UsersAccount';

const User = (onRegister, onLogin) => {



    const [clickedForm, setClickedForm] = useState(onRegister);

    const HandleRegister = () => {
        // alert("clicked tab register")
        setClickedForm(onRegister)
    }
    const HandleLogin = () => {
        // alert("clicked tab login")
        setClickedForm(onLogin)
    }

    return <div className="user">
        <UsersAccount
            onRegister={HandleRegister}
            onLogin={HandleLogin}
            bgcolor1={clickedForm === onRegister ? "#FFF" : "#E0E0E0"}
            bgcolor2={clickedForm === onLogin ? "#FFF" : "#E0E0E0"}
            text={clickedForm === onRegister ? "Register" : "Login"}
            display={clickedForm === onRegister ? "block" : "none"}
        />

    </div>
}
export default User;