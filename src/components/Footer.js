import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="w3_agile_social_icons footer-w3icons">
                        <ul>
                            <li><a href="#" className="icon icon-cube agile_facebook"/></li>
                            <li><a href="#" className="icon icon-cube agile_rss"/></li>
                            <li><a href="#" className="icon icon-cube agile_instagram"/></li>
                            <li><a href="#" className="icon icon-cube agile_t"/></li>
                        </ul>
                    </div>
                    <p>© 2017 Care Trade. All Rights Reserved | Design by <a href="http://w3layouts.com/"
                                                                             target="_blank">W3layouts</a></p>
                </div>
            </div>
        );
    }
}

export default Footer;