import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state={

        }
    } 
    render() {
        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav">
                   <li className="nav-item">
                       <a className="nav-link" href="https://harshrajunicorn.online">Course Management App</a>
                   </li>
                   </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;