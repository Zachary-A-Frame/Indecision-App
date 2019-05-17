console.log('App.js Is Running')

const app = {
    title: "Indecision App",
    subtitle: "This app helps you make a choice!",
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    // Stops page from refreshing!
    // console.log('Form submitted!');
    const option = e.target.elements.option.value // Target where the event started on - the form with name "option" - "value" gets input value!

    if (option) {
        app.options.push(option); // Push on our brand new item to our array! 
        e.target.elements.option.value = '';
    };
    renderApp()
    console.log(app.options)
}


// TODO: Create Remove All button above our list.
// On click handler wipes the array -> rerender.

const reset = () => {options = [], renderApp()}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            <button onClick={reset}>Reset</button>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
}



const appRoot = document.getElementById('app');

renderApp();