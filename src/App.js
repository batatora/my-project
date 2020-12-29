import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Container from './container'

export const store = configureStore ();

class App extends Component {

    render() {
        return (
            <div className="app">

                    <Router>
                           
                                <Container/>

                    </Router>

            </div>
        );
    }
}

export default App;
