import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }
    }
    render(){
        return(
            <div>
                <button onClick={() =>  this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() =>  this.changeCount(1)}>+</button>
            </div>
        )
    }

    // when updating state, perform it as a method so that it is using the 
    // previous state to set the new state
    changeCount(amount){
        this.setState(previousState => {
            return({count: previousState.count + amount})
        })
    }
}