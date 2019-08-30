import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name} you are {props.age} years old</p>
        </div>
    )
}

const Footer = () =>{
    return(
        <div>
            <p>This is the footer</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 20
    return(
        <div> 
        
            <h1>Greetings</h1>
            <Hello name="George"  age = {26 + 10}/>
            <Hello name = {name} age = {age}/>
            <Footer />
        </div>
    )
}

/*
const App = () => {
    const now = new Date()
    const a = 10
    const b = 20

    return(
        <div>
            <p>Hello Wcas now is {now.toString()}</p>
            <p>
                {a} plus {b} is {a+b}
            </p>
        </div>
    )
}
*/

ReactDOM.render(<App/>, document.getElementById('root') )
