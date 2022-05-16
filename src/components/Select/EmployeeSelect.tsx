import {useState, useEffect, ChangeEvent} from "react";

import {Employee} from '../../interfaces/database';
import {useApp} from '../../store/provider';
import {useNavigate} from "react-router-dom";

export default function Select() {
    const navigate = useNavigate();
    const {setUser,outlet} = useApp();
    const [list, setList] = useState<Employee[]>([]);

    const getEmployeesList = async (id: number) => {
        let uri = `http://localhost:8080/api/employeesByStore/${id}`;
        const response = await fetch(uri);
        const data = await response.json();
        setList(data);
    }

    useEffect(() => {
        getEmployeesList(outlet).catch(null);
    }, [outlet]);


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setUser(Number(value));
        console.log(value);
    }
    const handleSubmit=()=>{
        navigate('/menu');
    }
    return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">Select Employee</h5>
                <select className={"form-control"} onChange={handleChange}>
                    {list.map((emp) => {
                        return <option key={emp.id} value={emp.id}>{emp.name}</option>
                    })}
                </select>
                <div className="d-grid gap-2">
                    <button className={"btn btn-success mt-2"} onClick={handleSubmit}>
                            Access
                    </button>
                </div>
            </div>
        </div>
    )
}