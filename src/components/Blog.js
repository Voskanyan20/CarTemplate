import React, {Component} from 'react';

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="agileits-title">Our Blog<span className="w3lshr-line"> </span></h3>
                <div className="blog-agileinfo">
                    <div className="col-md-7 blog-w3grid-img">
                        <a href="#myModal" data-toggle="modal" className="wthree-blogimg">
                            <img src="images/g1.jpg" className="img-responsive" alt="Car"/>
                        </a>
                    </div>
                    <div className="col-md-5 blog-w3grid-text">
                        <h4><a href="#myModal" data-toggle="modal">Soluta vum nobis</a></h4>
                        <h6>By <a href="#"> Admin</a> - Nov 25th, 2016 </h6>
                        <p>Sed interdum interdum accumsan. Aenean nec purus ac orci finibus facilisis. In sit
                            amet placerat nisl, in auctor sapien. Donec ultricies faucibus ante in mattis earum
                            rerum delectus in auctor sapien. </p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="blog-agileinfo blog-agileinfo-mdl">
                    <div className="col-md-7 blog-w3grid-img blog-img-rght">
                        <a href="#myModal" data-toggle="modal" className="wthree-blogimg">
                            <img src="images/g2.jpg" className="img-responsive" alt="Car"/>
                        </a>
                    </div>
                    <div className="col-md-5 blog-w3grid-text">
                        <h4><a href="#myModal" data-toggle="modal">Aenean nec purus ac</a></h4>
                        <h6>By <a href="#"> Admin</a> - Dec 31st, 2015 </h6>
                        <p>Sed interdum interdum accumsan. Aenean nec purus ac orci finibus facilisis. In sit
                            amet placerat nisl, in auctor sapien. Donec ultricies faucibus ante in mattis earum
                            rerum hic a sapiente delectus. </p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="blog-agileinfo">
                    <div className="col-md-7 blog-w3grid-img">
                        <a href="#myModal" data-toggle="modal" className="wthree-blogimg">
                            <img src="images/g3.jpg" className="img-responsive" alt="Car"/>
                        </a>
                    </div>
                    <div className="col-md-5 blog-w3grid-text">
                        <h4><a href="#myModal" data-toggle="modal">Mattis earum rerum</a></h4>
                        <h6>By <a href="#"> Admin</a> - Dec 25th, 2016 </h6>
                        <p>Sed interdum interdum accumsan. Aenean nec purus ac orci finibus facilisis. In sit
                            amet placerat nisl, in auctor sapien. Donec ultricies faucibus ante rerum hic a
                            sapiente delectus in auctor sapien. </p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Blog;