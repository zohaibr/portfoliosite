"use strict";

import React, {Component} from 'react';
import '../public/App.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                    <a href="#" id="pull">Menu</a>
                    <p className="heading">Zohaib Rahman</p>
                    <ul className="navlist">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#presentations">Presentations</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
            </div>
        );
    }
}
export default Navbar;
