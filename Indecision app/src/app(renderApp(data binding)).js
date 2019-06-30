'use strict';
console.log("App.js is running!")

//JSX - JavaScrippt XML

const approots = document.getElementById('app');

const user={
    name: 'AKINOLA Victor',
    age: 23,
    location: 'Nigeria'
}

const getLocation = (location) =>{
    if(location){
        return <p>Location: {location}</p>
    }
}

var template = (
    <div>
        <h1>{user.name ? user.name : 'Unknown'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const approot = document.getElementById('app');
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count=0;
    renderCounterApp();
};



//the manual Data binding
const renderCounterApp = () => {
    const template3 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template3, approot);
}
renderCounterApp();

const app = {
    title: 'Indecision App',
    subtitle: 'put your file in the hand of the computer',
    option: ['one', 'two']
}
console.log(app.option.length);

var template2 = (
    <div>
        <h1>Idecision App</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.option.length>0) ? 'here are your options:': 'no option'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const approot2 = document.getElementById('app2');
ReactDOM.render(template2, approot2);