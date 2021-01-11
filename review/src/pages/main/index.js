import React from 'react';
// import Form from '../../comps/Form'; | //this will get tiring and confusing, below is another way to import
import Form from 'comps/Form';

const Main = () => {

    const HandleContainerSelect = (name) => {
        alert("clicked container "+name);
    }

    const HandleFormComplete = () => {

    }

    return <div className="main">
        <div className="left"></div>
        <div className="content">
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="register"
            />
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="signup"
            />
        </div>
        <div className="right"></div>
    </div>
}
export default Main;