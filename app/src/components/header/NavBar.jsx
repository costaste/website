import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    getSelected() {
        const currPath = window.location.pathname;
        var home = 'navButton', projects = 'navButton', classes = 'navButton', resume = 'navButton';

        switch(currPath) {
            case '/':
                home = 'navButton-selected';
                break;
            case '/projects':
                projects = 'navButton-selected';
                break;
            case '/classes':
                classes = 'navButton-selected';
                break;
            case '/resume':
                resume = 'navButton-selected';
                break;
        }

        return [home, projects, classes, resume];
    }


    render() {
        const navButtons = this.getSelected();
        
        return (
            <header>
                <ul id="headerButtons">
                    <li className={navButtons[0]}><Link to="">Home</Link></li>
                    <li className={navButtons[1]}><Link to="/projects">Projects</Link></li>
                    <li className={navButtons[2]}><Link to="/classes">Classes</Link></li>
                    <li className={navButtons[3]}><Link to="/resume">Resume</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;