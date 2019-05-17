console.log('Build-It-Visible.js Is Running')

const app = {
    title: "Build It Visible",
    subtitle: "This app demonstrates toggle switches.",
}
let counter = 0;
const onButtonPress = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={onButtonPress}>Toggle Visbility</button>     
            <p>Details!</p>
        </div>
    )

    if (counter === 0) {
        ReactDOM.render(template, appRoot)
        counter++;
    } else {
        renderApp();
        counter--;
    }
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={onButtonPress}>Toggle Visbility</button>            
        </div>
        );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp();