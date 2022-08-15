import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {AppContext} from './store/provider';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import ManageEmployee from "./pages/manage/Employees";
import ManageCustomer from "./pages/manage/Customers";
import MainMenu from "./pages/MainMenu";
import Sales from "./pages/Sales/Sales";

function App() {
    const [user,setUser] = useState(0);
    const [outlet,setOutlet] = useState(0);
    return (
        <AppContext.Provider value={{user,setUser,outlet,setOutlet}}>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sales" element={<Sales/>}/>
                <Route path={"/management/employees"} element={<ManageEmployee/>}/>
                <Route path={"/management/customers"} element={<ManageCustomer/>}/>
                <Route path={'/management/employees/:id'} element={<ManageEmployee/>}/>
                <Route path={'/management/customers/:id'} element={<ManageCustomer/>}/>
                <Route path={'/menu'} element={<MainMenu/>}/>
            </Routes>
        </Router>
        </AppContext.Provider>
    )
}

export default App;