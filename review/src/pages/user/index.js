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
        <UsersAccount />

    </div>
}
export default User;