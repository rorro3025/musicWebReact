import {useState, useEffect, ChangeEvent} from "react";
import {useApp} from "../../store/provider";

import {Outlet} from "../../interfaces/database";

export default function SelectOutlet(){
    const {setOutlet} = useApp();
    const [outlets,setOutlets] = useState<Outlet[]>([]);

    const getOutlets = async () =>{
       const uri = 'http://localhost:8080/api/outlets';
       let response = await fetch(uri);
       let data = await response.json();
       setOutlets(data);
    }

    useEffect(()=>{
        getOutlets();
    },[]);

    const handleChange = ({target}: ChangeEvent<HTMLSelectElement>) =>{
        let {value} = target;
        setOutlet(Number(value));
    }
    return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">Select outlet</h5>
                <select className={"form-control"} onChange={handleChange}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {outlets.map((item) => {
                        return <option key={item.id} value={item.id}>{item.city}</option>
                    })}
                </select>
            </div>
        </div>
    )
}