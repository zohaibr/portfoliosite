"use strict";

import React, { Component } from 'react';
import '../public/App.css';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Presentations from './presentations';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <div>
                <About />
                <Projects />
                <Resume />
                <Presentations />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;