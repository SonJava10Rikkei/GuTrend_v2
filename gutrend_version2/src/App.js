import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footter from './layouts/components/Footter';
import Header from './layouts/components/Header';
import Newsletter from './layouts/components/NewsLetter';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Newsletter />
                <Footter />
            </div>
        </Router>
    );
}

export default App;
