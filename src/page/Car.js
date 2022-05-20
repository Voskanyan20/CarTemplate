import React, {Component} from 'react';
import '../assets/css/flexslider.css'
import '../assets/css/style.css'
import '../assets/css/font-awesome.css'
import '../assets/css/bootstrap.css'
import Time from "../components/Time";
import Header from "../components/Header";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Stats from "../components/Stats";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

class Car extends Component {
    render() {
        return (
            <div id="page-top">
                <div style={{position: 'fixed', top: '0px', left: '0px', width: '0', height: '0'}}
                     id="scrollzipPoint"></div>


                <div id="home" className="w3ls-banner" style={{
                    backgroundImage: 'url(../images/1.jpg)',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                }}>

                    <div className="header-w3layouts">
                        <Header/>
                    </div>

                    <div className="banner-text">
                        <div className="container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <div className="banner-w3lstext">
                                            <h2>Trendy Car Sale</h2>
                                            <p>Mauris ex nulla aliquam ornare facilisis nec convallis pulvinar a non
                                                nunc non leo sollicitudin, Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-w3lstext">
                                            <h3>Cars for Sale </h3>
                                            <p>Mauris ex nulla aliquam ornare facilisis nec convallis pulvinar a non
                                                nunc non leo sollicitudin, Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-w3lstext">
                                            <h3>Sapien Delects</h3>
                                            <p>Mauris ex nulla aliquam ornare facilisis nec convallis pulvinar a non
                                                nunc non leo sollicitudin, Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="#register" className="wthree-btn btn-6 scroll">Register Now <span></span></a>
                        </div>
                    </div>

                </div>

                <div className="wthree-soon">
                    <Time/>
                </div>

                <div id="about" className="about">
                    <div className="container">
                        <div className="col-md-6 agileits_about_grid_left">

                        </div>
                        <img src="images/4.png" alt=" " className="img-responsive about-w3img"/>
                        <div className="col-md-6 agileits_about_grid_right">
                            <h3 className="agileits-title">about <span className="w3lshr-line"> </span></h3>
                            <h4>Pellentesque habitant morbi tristique senectus</h4>
                            <p> In non dui auctor sapien accumsan malesuada. Donec nibh eros,
                                placerat facilisis ultricies et, sagittis vitae metus. Integer aliquam faucibus sapien,
                                ultricies posuere nisl euismod ut. Nulla eget mauris orci. Duis dictum, justo a sodales
                                porta,
                                justo dui dapibus purus, mattis vehicula dui nibh eu felis.</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="w3ls_about_bottom">
                    <div className="container">
                        <div className="w3_about_bottom_grid">
                            <h4><span>Integer aliquam</span> Donec nibh eros, placerat et dictum</h4>
                            <a href="#myModal" className="wthree-btn btn-6" data-toggle="modal">Read
                                More<span></span></a>
                        </div>
                    </div>
                </div>

                <div id="features" className="features">
                    <div className="container">
                        <div className="w3layouts_skills_grids w3layouts-features-agileinfo">
                            <div className="col-md-6 w3features-left">
                                <h3 className="agileits-title">Features<span className="w3lshr-line"> </span></h3>
                                <div className="w3features-grids">
                                    <div className="w3features-left-gridl">
                                        <div className="hi-icon-wrap hi-icon-effect-9 hi-icon-effect-9a">
                                            <i className="hi-icon fa-cubes"> </i>
                                        </div>
                                    </div>
                                    <div className="w3features-left-gridr">
                                        <h4>lacinia vehicula ac aliquam</h4>
                                        <p>Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="w3features-grids">
                                    <div className="w3features-left-gridl">
                                        <div className="hi-icon-wrap hi-icon-effect-9 hi-icon-effect-9a">
                                            <i className="hi-icon fa-globe"> </i>
                                        </div>
                                    </div>
                                    <div className="w3features-left-gridr">
                                        <h4>tincidunt urna egestas non</h4>
                                        <p>Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="w3features-grids">
                                    <div className="w3features-left-gridl">
                                        <div className="hi-icon-wrap hi-icon-effect-9 hi-icon-effect-9a">
                                            <i className="hi-icon fa-gear"> </i>
                                        </div>
                                    </div>
                                    <div className="w3features-left-gridr">
                                        <h4>nullam elementum blandit dui</h4>
                                        <p>Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="w3features-grids">
                                    <div className="w3features-left-gridl">
                                        <div className="hi-icon-wrap hi-icon-effect-9 hi-icon-effect-9a">
                                            <i className="hi-icon fa-hotel"> </i>
                                        </div>
                                    </div>
                                    <div className="w3features-left-gridr">
                                        <h4>ullamcorper nisl aliquam</h4>
                                        <p>Maecenas bibendum nisi purus, in ullamcorper nisl aliquam id.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-9 w3features-right">
                                <div id="register" className="login-form agileits-right">
                                    <div className="agile-row">
                                        <h5>Register Form</h5>
                                        <div className="login-agileits-top">
                                            <form action="#" method="post">
                                                <p>User Name </p>
                                                <input type="text" className="name" name="user name" required=""/>
                                                <p>Email</p>
                                                <input type="email" className="email" name="email" required=""/>
                                                <p>Password</p>
                                                <input type="password" className="password" name="password"
                                                       required=""/>
                                                <input type="submit" value="Register"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="services jarallax" style={{backgroundImage: 'url(/images/bg.jpg)'}}>
                    <Services/>
                </div>

                <div id="gallery" className="gallery">
                    <Gallery/>
                </div>

                <div id="stats" className="stats services news-w3layouts jarallax" style={{
                    backgroundImage: 'url(/images/bg.jpg)',
                    backgroundAttachment: 'scroll',
                    backgroundSize: 'auto',
                    transform: 'linear'
                }}>
                    <Stats/>
                </div>

                <div id="blog" className="blog gallery">
                    <Blog/>
                </div>

                <div id="contact" className="contact">
                    <Contact/>
                </div>

                <div className="subscribe-agileinfo services jarallax" style={{backgroundImage: 'url(/images/bg.jpg)'}}>
                    <Subscribe/>
                </div>

                <div className="copyw3-agile">
                    <Footer/>
                </div>


                <a href="#" id="toTop" style={{display: 'block',zIndex:'100',backgroundImage: 'url(/images/move-up.png)', backgroundRepead: 'no-repeat', backgroundPosition: '0px 0px', transition:'all 0.5s'}}><span id="toTopHover" style={{opacity: '0'}}></span>To Top</a>
            </div>
        );
    }
}

export default Car
;