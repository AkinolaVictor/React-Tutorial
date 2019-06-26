'use strict';
console.log("App.js is running!")

//JSX - JavaScrippt XML

var approots = document.getElementById('app');

var user={
    name: 'AKINOLA Victor',
    age: 23,
    location: 'Nigeria'
}

function getLocation(location){
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
var approot = document.getElementById('app');
ReactDOM.render(template, approot);

var app = {
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
var approot = document.getElementById('app2');
ReactDOM.render(template2, approot);