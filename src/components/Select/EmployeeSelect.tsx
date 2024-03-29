import {useState, useEffect, ChangeEvent} from "react";

import {Employee} from '../../interfaces/database';
import {useApp} from '../../store/provider';
import {useNavigate} from "react-router-dom";
import {getEmployeesByOutlet} from "./controller";

interface Props{
    handleError:(op:boolean)=>void
}
export default function Select({handleError}:Props){
    const navigate = useNavigate();
    const {setUser, outlet} = useApp();
    const [list, setList] = useState<Employee[]>([]);
    const [option,setOption] = useState({
        value:"none",
    })

    useEffect(() => {
        getEmployeesByOutlet(outlet).then((data:Employee[]) => setList(data));
    }, [outlet]);


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setOption({value})
        console.log(value);
    }
    const handleSubmit = () => {
        if (option.value !== "none") {
            console.log(option.value);
            setUser(Number(option.value));
            navigate('/menu');
            handleError(false)
        } else {
            handleError(true);
        }
    }
    return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">Select Employee</h5>
                <select className={"form-control"} id="selection" onChange={handleChange} value={option.value}>
                    <option value={"none"}>Select an Option</option>
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