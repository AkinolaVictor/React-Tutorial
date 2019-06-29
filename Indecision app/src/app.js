'use strict';
console.log("App.js begin running!")

//JSX - JavaScrippt XML
var app={
   title: 'Indecision App',
   subtitles: "it' a great app"
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <h3>{app.subtitles}</h3>
    </div>
);
var approots = document.getElementById('app');
ReactDOM.render(template, approots);

var user={
    name: 'AKINOLA Victor',
    age: 23,
    location: 'Nigeria'
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var approot = document.getElementById('app2');
ReactDOM.render(template2, approot);
