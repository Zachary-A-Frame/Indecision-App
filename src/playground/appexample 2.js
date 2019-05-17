console.log('App.js Is Running')

// JSX - Javascript XML

// IF statements in React
// ternary operators
// logical and operator

const app = {
    title: "Indecision App",
    subtitle: "This app helps you make a choice!",
    options: ['One', 'Two']
}


const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options: ' : 'No Options'}</p>
</div>
);
// DECLARE ON AN OBJECT

const user = {
    name: 'Zach Frame', 
    age: 26,
    location: 'Cleveland'
}

function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;;
    }
}

// Ternary operator: Conditional rendering. If true (exists), display username, otherwise render static: Anonymous
// {user.name ? user.name : 'Anonymous'}
 // Reference an above object! This is Dynamic data retrieval! 
const template2 = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1> 
    {(user.age >= 18) &&  <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

const appRoot = document.getElementById('app');

// Pass in two arguments, the template, and then the element we want to render it to. 
// We have a div in which our template will be used, which is the appRoot constiable.
ReactDOM.render(template, appRoot);
