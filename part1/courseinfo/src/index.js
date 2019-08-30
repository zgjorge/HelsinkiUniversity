import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Foundamentals of react'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const Header = (props) => {
        return(
            <h1>{props.course}</h1>
        )
    }

    const Part1 = (props) => {
        return(
            <div>
                <p>
                    {props.part1} {props.exercises1}
                </p>
            </div>
        )
    }

    const Part2 = (props) => {
        return(
            <div>
                <p> 
                    {props.part2} {props.exercises2}
                </p>
            </div>
        )
    }

    const Part3 = (props) => {
        return(
            <div>
                <p>
                    {props.part3} {props.exercises3}
                </p>
            </div>
        )
    }
    const Content = (props) => {
        return(
            <div>
                <Part1 
                    part1 = {part1}
                    exercises1 = {exercises1}
                />
                <Part2
                    part2 = {part2}
                    exercises2 = {exercises2}
                />
                <Part3
                    part3 = {part3}
                    exercises3 = {exercises3}
                />   
            </div>                    
        )
    }

    const Total = (props) => {
        return(
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        )
    }


    return(
        <div>
            <Header course = {course} />
            <Content 
                part1 = {part1} exercises1 = {exercises1}
                part2 = {part2} exercises2 = {exercises2}
                part3 = {part3} exercises3 = {exercises3}
            />
            <Total 
                exercises1 = {exercises1}
                exercises2 = {exercises2}
                exercises3 = {exercises3}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

