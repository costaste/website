import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    getSelected() {
        const currPath = window.location.pathname;
        let home = 'navButton', projects = 'navButton', classes = 'navButton', resume = 'navButton';
        let homeText = 'navText', projText = 'navText', classText = 'navText', resText = 'navText';

        switch(currPath) {
            case '/':
                home = 'navButton-selected';
                homeText = 'navText-selected';
                break;
            case '/projects':
                projects = 'navButton-selected';
                projText = 'navText-selected';
                break;
            case '/classes':
                classes = 'navButton-selected';
                classText = 'navText-selected';
                break;
            case '/resume':
                resume = 'navButton-selected';
                resText = 'navText-selected';
                break;
        }

        const buttons = [home, projects, classes, resume];
        const text = [homeText, projText, classText, resText];
        return { navButtons: buttons, navText: text };
    }


    render() {
        const styles = this.getSelected();

        return (
            <header>
                <ul id="headerButtons" class='navbar'>
                    <li className={styles.navButtons[0]}><Link className={styles.navText[0]} to="">Home</Link></li>
                    <li className={styles.navButtons[1]}><Link className={styles.navText[1]} to="/projects">Projects</Link></li>
                    <li className={styles.navButtons[2]}><Link className={styles.navText[2]} to="/classes">Classes</Link></li>
                    <li className={styles.navButtons[3]}><Link className={styles.navText[3]} to="/resume">Resume</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;
