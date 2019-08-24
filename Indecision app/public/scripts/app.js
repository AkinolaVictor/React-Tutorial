/*This would be updated by babel's Engine */
//would be continued soon
'use strict';

console.log("App.js is running!");

//JSX - JavaScrippt XML
var app = {
    title: 'Indecision App',
    subtitle: "it' a great app"
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h3',
        null,
        app.subtitle
    )
);
var approots = document.getElementById('app');
ReactDOM.render(template, approots);

var user = {
    name: 'AKINOLA Victor',
    age: 23,
    location: 'Nigeria'
    State: Osun State
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var approot = document.getElementById('app2');
ReactDOM.render(template2, approot);
