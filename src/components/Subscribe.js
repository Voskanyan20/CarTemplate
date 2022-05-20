import React, {Component} from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div className="container">
                <h4>Subscribe Our Newsletter</h4>
                <form action="#" method="post">
                    <input type="email" name="email" placeholder="Enter your Email..." required=""/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Subscribe;