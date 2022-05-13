import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {AppContext} from './store/provider';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Management from "./pages/manage";

function App() {
    const [user,setUser] = useState(0);
    const [outlet,setOutlet] = useState(0);
    return (
        <AppContext.Provider value={{user,setUser,outlet,setOutlet}}>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/management/:object/"} element={<Management/>}/>
                <Route path={'/management/:object/:id'} element={<Management/>}/>
                <Route path={'/management/:object/:id'} element={<Management/>}/>
            </Routes>
        </Router>
        </AppContext.Provider>
    )
}

export default App;