class Counter extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        // This is like the es6-classes example with this.major and this.location
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
        const json = localStorage.getItem('count')
        const count = parseInt(json)
            
            if (!isNaN(count)) {
        this.setState(() => ({ count }))
        }
    } catch (e) {
        // Do nothing at all if json data is invalid.
    }
}

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
        const json = parseInt(this.state.count);
        localStorage.setItem('count', json);
        console.log('saving data')
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        // this.setState({
        //     count: 0
        // })
        // this.setState({
        //     count:this.state.count +1 
        // })

        this.setState(() => {
            return {
                count: 0
            }
        })
    }   

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0
// const addOne = () => {
//     console.log('addOne', count)
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     console.log('minusOne')
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     console.log("reset")
//     count = 0
//     renderCounterApp()
// }



// const appRoot = document.getElementById('app');
// // Pass in two arguments, the template, and then the element we want to render it to. 
// // We have a div in which our template will be used, which is the appRoot constiable.

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>RESET!!!</button>
//         </div>
//         )
//         ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();