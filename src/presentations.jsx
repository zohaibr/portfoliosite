"use strict";

import React from 'react';

export default () => {
    return (
        <div className={"presentations row-grey"} >
            <div className="presentationHeading">
                <div id="presentations">
                    <a id="presentations"></a>
                </div>
                <h2>Presentations</h2>
                <h2 className="hideme"></h2>
            </div>
            <div className="presentation-list">
                <a className="presentation-link" href="https://www.youtube.com/watch?v=IaZe17WIjLk&t=16s">
                    <div className="spacer-sm">
                        <div className={"video-sm video-sm-1"}></div>
                        <div className="video-text-box">
                            <div className="text-box">
                                <div className="video-text-title">
                                    TECH TALK: INTRODUCTION TO TYPE SCRIPT
                                </div>
                                <div className="video-text-sm">
                                    A brief over view about Type Script and how it works?
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="presentation-link" href="https://www.youtube.com/watch?v=maaYUo4Mtqw&t=174s">
                    <div className="spacer-sm">
                        <div className={"video-sm video-sm-2"}></div>
                        <div className="video-text-box">
                            <div className="text-box">
                                <div className="video-text-title">
                                    CAPSTONE: FOOD PRINT
                                </div>
                                <div className="video-text-sm">
                                    A smart food journal. Users can take a photo and see the nutrition facts of their meal.
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="https://youtu.be/oWWgHvx0l2k?t=6">
                    <div className="spacer-sm">
                        <div className={"video-sm video-sm-3"}></div>
                        <div className="video-text-box">
                            <div className="text-box">
                                <div className="video-text-title">
                                    STACKATHON: AUTO ATTENDANCE CHROME EXTENSION
                                </div>
                                <div className="video-text-sm">
                                    A Chrome Extension to help students auto login for attendance.
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </div>

    )
}