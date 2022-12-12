import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
this.state = {
    FullName: "Ala Ben Ammar",
    prof:"Software Engineer",
    bio:"Student in GoMyCode", 
    Show:"Show"
}
    }


    

    render() {
        return (
            <div>
                <h1>{this.state.Show}</h1>
            </div>
        );
    }
}


;

export default Button;
