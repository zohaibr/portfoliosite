import React from 'react';
import linkedin from '../public/img/logos/linkedin.png';
import mail from '../public/img/logos/mail.png';
import github from '../public/img/logos/github.png';


export default () => {
    return (
        <div className="contact">
            <h2>Get in touch</h2>
            <div className="contactMethods">
                <a className="mailTo" href="mailto:zohaibr@gmail.com?Subject=Hello%20Zohaib" target="_blank">
                    <img src={mail} alt=""/>
                </a>
                <a className="linkedIn" href="https://www.linkedin.com/in/zohaibr" target="_blank">
                    <img src={linkedin} alt=""/>
                </a>
                <a className="github" href="https://www.github.com/zohaibr" target="_blank">
                    <img src={github} alt=""/>
                </a>
            </div>
        </div>
    )
}