import React, {Component} from 'react';
import Car from "./page/Car";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
class App extends Component {
    render() {
        return (

                <BrowserRouter>
                    <Routes>
                        <Route path='/car'  element={<Car/>}/>
                    </Routes>
                </BrowserRouter>


        );
    }
}

export default App;