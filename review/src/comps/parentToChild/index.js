import React from 'react';

//parent will provide props, the props could be anything

//the child would assume there should be a title. and the child doesn't know what the title is going to be unless parent gives the title
const Child = (props) => {
    return (
        <div>
            <button onClick={props.doWhatever}>{props.title}</button>
        </div>
    )
}
const Parent = (props) => {
    return (
        <div>
            {/* {...props} is spread operator */}
            {/* <Child {...props} /> */}

            <Child doWhatever={props.changeTheWorldEvent} title={props.title} />
            <Child doWhatever={props.keepTheWorldSameEvent} title={props.title}/>
        </div>
    )
}
export default Parent;

//Notes:
//youtube link : https://www.youtube.com/watch?v=dyL99ACQfsM

//1. props are passed down from parent to child

//2. events are often passed down, but they are triggered upwards

//3. Spread Operator: {...props} in the parent component is for passing everything that is coming from the grandparent to the child