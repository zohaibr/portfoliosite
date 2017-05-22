import React from 'react';
import '../public/App.css';
import Me from '../public/img/zohaib.png';

export default () => {
    return (
        <div className="about">
            <a id="about"></a>
            <img src={Me} className="profileImg" alt=""/>
            <h3 className="profileName"> Zohaib Rahman </h3>
            <div className="profileText">
                <h2>Who am I? </h2>
                <span>Hi! I'm Zohaib Rahman a.k.a 'Zo'. I am a full stack engineer from New York City.
                    I’ve developed through a mix of intersecting roles throughout my career in the tech industry,
                    from Product Manager to a budding entrepreneur. Recently, I am enjoying learning about
                Web Development and the power of creating things by your own hands.
                <br/><br/>
                When I am not working, I like to play Tennis, travel the World, and keep up with the latest
                Netflix.</span>
            </div>
            <hr/>
            <div className="languages">
                <h2>Languages</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Sass</li>
                </ul>
            </div>
            <hr/>
            <div className="technologies">
                <h2>Technologies</h2>
                <ul className="technologiesList">
                    <div>
                        <h4>Frameworks/libraries</h4>
                        <li>React</li>
                        <li>React-Redux</li>
                        <li>Express</li>
                        <li>Node.js</li>
                        <li>jQuery</li>
                        <li>Mocha/ Chai</li>
                        <li>AJAX</li>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>Angular 2</li>
                    </div>
                    <div className="dayToday">
                        <h4>Day-to-day comfort</h4>
                        <li>Version Control(GIT)</li>
                        <li>Agile Methodology</li>
                    </div>
                    <div className="hideme">
                        <h3>hidden</h3>
                    </div>

                </ul>
            </div>
        </div>
    )
}