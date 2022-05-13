import React,{useState} from "react";

import Layout from "../../components/Layout";
import {Employee} from "../../interfaces/database";
import {useApp} from "../../store/provider";

export default function Home() {
    const outlets = ["Coyoacan", "Tutitlan", "Polanco", "Coacalco"]
    const {user,outlet,setUser,setOutlet} = useApp();
    const [out,setOut] = useState(0)
    const [data, setData] = useState<Employee[]>([{id: 1, name: "John", outletId: 1}, {
        id: 2,
        name: "Jane",
        outletId: 3
    }, {id: 3, name: "Jack", outletId: 4}, {id: 4, name: "Jill", outletId: 1}]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOut(Number(e.target.value))
    }

    const handleSubmit = ()=>{
        setUser(1)
        setOutlet(3)
    }
    return (
        <Layout>
            <h1>Home</h1>
            <div className={"container"}>
                select an option
                <div className="row mt-2">
                    <div className="col-sm-1 col-md-6">
                        <h3>{user}</h3>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Select outlet</h5>
                                <select className={"form-control"} onChange={handleChange}>
                                    {outlets.map((outlet, index) => {
                                        return <option key={index} value={index}>{outlet}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-6">
                        <h3>{outlet}</h3>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Select employee</h5>
                                <select className={"form-control"}>
                                    {data.map((emp ) => (out === emp.outletId-1 ? <option key={emp.id} value={emp.id}>{emp.name}</option>:null))}
                                </select>
                                <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
