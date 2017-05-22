import React, {Component} from 'react';
import Scroll from 'react-scroll';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Presentations from './presentations';
import Footer from './footer';

let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


export default class extends Component {

    componentDidMount() {
        scrollSpy.update();
    }

    render() {
        return (
            <div>
                <div className="Navbar">
                    <p className="heading"><a onClick={() => scroll.scrollToTop()}>Zohaib Rahman</a></p>
                    <ul className="navlist">
                        <li><ScrollLink activeClass="active" to="home" spy={true} smooth={true} duration={500}
                                        offset={-100}>About</ScrollLink></li>
                        <li><ScrollLink activeClass="active" to="projects" spy={true} smooth={true} duration={500}
                                        offset={-20}>Projects</ScrollLink></li>
                        <li><ScrollLink activeClass="active" to="resume" spy={true} smooth={true} duration={500}
                                        offset={-200}>Resume</ScrollLink></li>
                        <li><ScrollLink activeClass="active" to="presentations" spy={true} smooth={true} duration={500}
                                        offset={-20}>Presentations</ScrollLink></li>
                        <li><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</ScrollLink>
                        </li>
                    </ul>
                </div>
                <Element name="home">
                    <About />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Element name="resume">
                    <Resume />
                </Element>
                <Element name="presentations">
                    <Presentations/>
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
                <Footer />
            </div>
        );
    }
}
