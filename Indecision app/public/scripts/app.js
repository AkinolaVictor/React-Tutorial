/*This would be updated by babel's Engine  */
// it would be continued as soon as possible 
'use strict';

console.log("Indecision App.js is running!");

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: "it' a really great app buit with react"
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
    name: 'AKINOLA Victor Lekan',
    age: 23,
    School: OAU, 
    location: 'Nigeria'
    State: Osun State
};

//learn more

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
