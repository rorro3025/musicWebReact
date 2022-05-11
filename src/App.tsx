import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Management from "./pages/manage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/management/employee/:id'} element={<Management/>}/>
            </Routes>
        </Router>
    )
}

export default App;