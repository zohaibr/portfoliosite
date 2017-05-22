import React from 'react';
import foodPrintSplash from '../public/img/landing_page_foodPrint.png';
import foodPrintView from '../public/img/view_from_foodPrint.png';
import autoAttendance from '../public/img/chrome_extension_screenshot.png';
import reactlogo from '../public/img/logos/react.png';
import reduxlogo from '../public/img/logos/redux.png';
import nodelogo from '../public/img/logos/node.png';
import clarifailogo from '../public/img/logos/clarifai.png';
import nutrionixlogo from '../public/img/logos/nutrionix.png';
import chromelogo from '../public/img/logos/chrome.png';
import javascriptlogo from '../public/img/logos/javascript.png';


export default () => {
    const foodPrintLogoImages = [reactlogo, reduxlogo, nodelogo, clarifailogo, nutrionixlogo];
    const chromeLogoImages = [chromelogo, javascriptlogo];

    return (
        <div className={"projects row-grey"}>
            <div className="projectHeading">
                <div>
                    <a id="projects"></a>
                </div>
                <h2>Projects</h2>
                <h2 className="hideme"></h2>
            </div>
            <div className="projectList">
                <div className="eachProject">
                    <div className="foodPrintImages">
                        <img src={foodPrintSplash} className="foodprintImg" alt=""/>
                        <img src={foodPrintView} className="foodprintImg" alt=""/>
                    </div>
                    <span> FoodPrint</span>
                    <p>Foodprint is a mobile app developed with React-Native that uses photo recognition and nutritional
                        information APIs to automatically catalog your meals. Users can take a photo and see the
                        nutrition facts of their meal.
                        Meals are stored so you can keep track of what you've been eating over time. A photograph of
                        each meal is also stored so
                        you can remember what foods you liked and how healthy they were. Start logging your meals today
                        with Foodprint!</p>
                    <div className="foodPrintlogos">
                        {foodPrintLogoImages.map((img, idx) => {
                            return (
                                <img key={idx} src={img} className="logoImage" alt=""/>
                            )
                        })
                        }
                    </div>
                    <div className="action_buttons">
                        <a href="https://github.com/jwunder127/foodprint" target="_blank">
                            <div className="link-box-button">GITHUB</div>
                        </a>
                        <a href="https://www.dropbox.com/s/648uh6d71bxk1mg/foodprint.apk?dl=0" target="_blank">
                            <div className="link-box-button">ANDROID APP</div>
                        </a>
                    </div>
                </div>
                <div className="eachProject">
                    <img src={autoAttendance} className="autoAttendanceImg" alt=""/>
                    <span> Auto-attendance Chrome Extension</span>
                    <p> Chrome Extension that automatically logs the students to the FullStack Learn dot portal for
                        attendance. It uses Chrome browser API to detect if the user is within 100 meters of FullStack
                        Academy and has not logged in to the portal in the last eight hours. If the requirements are
                        met, it will launch a new tab with the portal site. </p>
                    <div className="chromelogo">
                        {chromeLogoImages.map((img, idx) => {
                            return (
                                <img key={idx} src={img} className="logoImage" alt=""/>
                            )
                        })
                        }
                    </div>
                    <div className="action_buttons">
                        <a href="https://github.com/zohaibr/FullStackAutoAttendanceLogin" target="_blank">
                            <div className="link-box-button">GITHUB</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}