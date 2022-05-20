import React, {Component} from 'react';
import STATS from '../data/stats.json'

class Stats extends Component {
    render() {
        return (
            <div className="container">
                <div className="stats-agileinfo agileits-w3layouts">
                    {
                        STATS.map(s=>(
                            <div key={s.id} className="col-sm-3 col-xs-6 stats-grid">
                                <div className="stats-img">
                                    <i className={s.img} aria-hidden="true"/>
                                </div>
                                <h6>{s.name}</h6>
                                <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
                                     data-max='157000' data-delay='.5' data-increment="100">{s.val}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Stats;