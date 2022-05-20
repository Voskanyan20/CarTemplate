import React, {Component} from 'react';
import SERVICES from '../data/services.json'
class Services extends Component {
    render() {
        return (
            <div className="container">
                <div className="w3ls_banner_bottom_grids">
                    <ul className="cbp-ig-grid">
                        {
                            SERVICES.map(s=>(
                                <li key={s.id}>
                                    <div className="w3_grid_effect">
                                        <span className={s.icon}></span>
                                        <h4 className="cbp-ig-title">{s.title}</h4>
                                        <span className="cbp-ig-category">Car Trade</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Services;