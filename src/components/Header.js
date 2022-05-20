import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Car Trade</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <h1 className="w3lslogo"><a href="#">CT</a></h1>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right cl-effect-15">

                            <li><a className="page-scroll" href="#home" data-hover="Home">Home</a></li>
                            <li><a className="page-scroll" href="#about" data-hover="About">About</a></li>
                            <li><a className="page-scroll" href="#features"
                                   data-hover="Features">Features</a></li>
                            <li><a className="page-scroll" href="#gallery" data-hover="Gallery">Gallery</a>
                            </li>
                            <li><a className="page-scroll" href="#stats" data-hover="Stats">Stats</a></li>
                            <li><a className="page-scroll" href="#blog" data-hover="Blog">Blog</a></li>
                            <li><a className="page-scroll" href="#contact" data-hover="Contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }
}

export default Header;