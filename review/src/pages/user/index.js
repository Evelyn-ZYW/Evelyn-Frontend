import React, { useState } from 'react';

import UsersAccount from 'comps/UsersAccount';

const User = (register, login) => {

    const [clickedForm, setClickedForm] = useState(register);

    const HandleRegister = () => {
        setClickedForm(register)
    }
    const HandleLogin = () => {
        setClickedForm(login)
    }

    return <div className="user">
        <UsersAccount
            onRegister={HandleRegister}
            onLogin={HandleLogin}
            bgcolor1={clickedForm === register ? "pink" : "#FFF"}
            bgcolor2={clickedForm === login ? "pink" : "#FFF"}
            text={clickedForm === register ? "Register" : "Login"}
            display={clickedForm === register ? "block" : "none"}
        />

    </div>
}
export default User;