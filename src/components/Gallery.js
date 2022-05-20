import React, {Component} from 'react';

class Gallery extends Component {
    GALLERY = [
        {
            id:1,
            img: "images/g1.jpg"
        },
        {
            id:2,
            img: "images/g2.jpg"
        },
        {
            id:3,
            img: "images/g3.jpg"
        },
        {
            id:4,
            img: "images/g4.jpg"
        },
        {
            id:5,
            img: "images/g5.jpg"
        },
        {
            id:6,
            img: "images/g6.jpg"
        },
        {
            id:7,
            img: "images/g7.jpg"
        },
        {
            id:8,
            img: "images/g8.jpg"
        },
        {
            id:9,
            img: "images/g9.jpg"
        }
    ]

    render() {
        return (
            <div className="container">
                <h3 className="agileits-title">Gallery<span className="w3lshr-line"> </span></h3>
                <div className="main">
                    {
                        this.GALLERY.map(g=>(
                            <div key={g.id} className="col-sm-4 col-xs-6 gallry-agile-grids">
                                <div className="view view-seventh">
                                    <a className="b-link-stripe b-animate-go thickbox"
                                       title="Car Trade">
                                        <img src={g.img} alt=""/>
                                        <div className="mask">
                                            <h4>Trending Cars</h4>
                                            <p>Donec efficitur lacus sit amet sollicitudin finibus. Sed tristique nisi
                                                augue, sed elementum </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;