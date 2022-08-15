import {useState, useEffect} from "react";

import {Employee} from "../../interfaces/database";

export default function ListAllEmployees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const getEmployees = async () => {
        let response = await fetch("http://localhost:8080/api/employees");
        let data = await response.json();
        setEmployees(data);
    }
    useEffect(() => {
        getEmployees().catch(null);
    }, [])

    return (
        <ol className={"list-group list-group-numbered mt-2"}>
            {employees.map((employee) => (
                <li className={"list-group-item d-flex justify-content-between align-items-start"} key={employee.id}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{employee.name}</div>
                        <small>{employee.outletNumber}</small>
                    </div>
                    <span className="badge bg-primary rounded-pill">2</span>
                </li>
            ))}
        </ol>
    )
}