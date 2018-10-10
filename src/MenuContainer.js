import React, { Component } from 'react';

export default class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown =this.handleMouseDown.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("a click!");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible });
    }

    
    render() {
        return(
            <div>
                <div>
                    <p>This is a test to see how to do this whole sliding menu thing</p>
                    <ul>
                        <li>You see that little button there? Go ahead and click that!</li>
                        <li>See that transition! Maybe we can add Greensock later to make it cooler! 😂 </li>
                        <li>This, however is cool for now though</li>
                    </ul>
                </div>
            </div>
        );
    }
}