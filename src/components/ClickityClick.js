// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component{
    constructor(){
        super();

        this.state = {
            hasBeenClicked: false,
        };
    }

    handleClick = () => {
        // Update our state here...
        this.setState({
            hasBeenClicked: true
        }, ()=> console.log(this.state.hasBeenClicked))
      };

    secondHandleClick = () => {
        this.setState(
            (previousState) => {
                return {
                    hasBeenClicked: !previousState.hasBeenClicked
                }
            }
        )
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.secondHandleClick}>Click me!</button>
          </div>
        )
    }
}