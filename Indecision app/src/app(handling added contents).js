'use strict';
console.log("App.js is running!")

//JSX - JavaScrippt XML

const approots = document.getElementById('app');

//for the user
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


const app = {
    title: 'Indecision App',
    subtitle: 'put your file in the hand of the computer',
    option: []
}
//use 
//console.log(app.options.length);
const onFormSubmit = (e) => {
    e.preventDefault();
    const options = e.target.elements.option.value;

    if (options) {
        app.option.push(options);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () =>{
    app.option = [];
    renderApp();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random()*app.option.length);
    const option = app.option[randomNum];
    alert(option);
}
const approot2 = document.getElementById('app2');
const numb = [44,53,24,67];

const renderApp = () => {
    var template2 = (
        <div>
            <h1>Idecision App</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.option.length>0) ? 'here are your options:': 'no option'}</p>
            <button disabled={app.option.length===0} onClick={onMakeDecision}>What should i do</button>
            <button onClick = {removeAll}>Remove All</button>
            {/*
                numb.map((one)=>{
                   return <p key={one}>Number: {one}</p>;
                })*/
            }
            <ol>{
                    app.option.map((oneVal)=> <li key={oneVal}>{oneVal}</li>)
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template2, approot2);
};
renderApp();
