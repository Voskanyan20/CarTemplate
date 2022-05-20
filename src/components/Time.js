import React, {Component} from 'react';
import Timer from "react-compound-timer";

class Time extends Component {
    render() {
        return (
            <div className="container">
                <div className="wthree-soon-agileinfo">
                    <h5>Our Turbo Car is almost ready</h5>
                    <Timer
                        initialTime={2523000000}
                        direction="backward"
                    >
                        <div className="agileits-timer">
                            <div className="clock">
                                <React.Fragment>
                                    <div className="column">

                                        <div className="timer"><Timer.Days/></div>

                                        <div className="text">Days</div>
                                    </div>
                                    <div className="column">

                                        <div className="timer"><Timer.Hours/></div>

                                        <div className="text">Hours</div>
                                    </div>
                                    <div className="column">

                                        <div className="timer"><Timer.Minutes/></div>

                                        <div className="text">Minutes</div>
                                    </div>
                                    <div className="column">

                                        <div className="timer"><Timer.Seconds/></div>

                                        <div className="text">Seconds</div>
                                    </div>
                                </React.Fragment>
                            </div>
                        </div>
                    </Timer>
                    <div className="w3_agile_social_icons">
                        <ul>
                            <li><a href="#" className="icon icon-cube agile_facebook"></a></li>
                            <li><a href="#" className="icon icon-cube agile_rss"></a></li>
                            <li><a href="#" className="icon icon-cube agile_instagram"></a></li>
                            <li><a href="#" className="icon icon-cube agile_t"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;
// <Timer.Days /> days
// <Timer.Hours /> hours
// <Timer.Minutes /> minutes
// <Timer.Seconds /> seconds
