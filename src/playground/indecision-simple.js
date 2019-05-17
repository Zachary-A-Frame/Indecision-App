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

const reset = () => {app.options = [], renderApp()  }
// This is the logic for deciding a thing for you to do. It is making the decision for our user.
// Logic works like this: However long our options list is, we multiply by that number to the nearest whole number.
// The user is alerted which number of the index their decision corresponds to.
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>            
            <button onClick={reset}>Reset</button>
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */}
                {
                    app.options.map((option) => {
                        return <li key={option}>Task: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
}



const appRoot = document.getElementById('app');

renderApp();