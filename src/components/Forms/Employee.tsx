import React, {useState, useEffect} from "react";

import {Employee, Outlet} from "../../interfaces/database"
import './style.css'

export default function EmployeeForm() {
    const [outlets, setOutlets] = useState<Outlet[]>([]);
    const initialState: Employee = {
        outletNumber: 0,
        name: "",
    }

    const [employeeInfo, setEmployeeInfo] = useState<Employee>(initialState);

    const saveNewEmployee = async () => {
        await fetch('http://localhost:8080/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeInfo)
        })
    }
    const getOutlets = async () => {
        const response = await fetch('http://localhost:8080/api/outlets');
        const data = await response.json();
        setOutlets(data);
    }

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setEmployeeInfo({...employeeInfo, [name]: value});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (employeeInfo.outletNumber === 0) {
            alert("Please select an outlet");
            return;
        }
        saveNewEmployee().then(() => {
            alert("Employee added successfully");
            setEmployeeInfo(initialState);

        })
    }

    useEffect(() => {
        getOutlets().catch(null);
    }, []);

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setEmployeeInfo({...employeeInfo, [name]: parseInt(value)});
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className={"form-control"} placeholder={"name"}
                           onChange={handleChangeText} value={employeeInfo.name}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Outlet</label>
                    <select className={"form-control"} name={"outletNumber"} value={employeeInfo.outletNumber}
                            onChange={handleChangeSelect}>
                        <option value="0">Select an option</option>
                        {outlets.map(outlet => <option key={outlet.id} value={outlet.id}>{outlet.city}</option>)}
                    </select>
                </div>
                <div className="d-grid gap-2 mt-2 mb-1">
                    <input type="submit" value="Save" className={"btn btn-success"}/>
                </div>
            </form>
        </main>
    )
}