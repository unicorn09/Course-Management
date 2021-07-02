import React, { Component } from 'react';


class FooterComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            
        }
    } 
    render() {
        return (
            <div>
                <footer>
                 <span className="text-muted">Copyright Harsh Raj 2021</span>
                </footer>


            </div>
        );
    }
}

export default FooterComponent;