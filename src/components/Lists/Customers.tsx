import {useState, useEffect} from "react";

import {Customer} from "../../interfaces/database";

export default function ListCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const getCustomers = async () => {
        let response = await fetch("http://localhost:8080/api/customers");
        let data = await response.json();
        setCustomers(data);
    }
    useEffect(() => {
        getCustomers().catch(null);
    }, [])
    return (
        <div className="list-group mt-2">
            {
                customers.map((customer)=>(
                    <article key={customer.id} className="list-group-item list-group-item-action list-group-item-warning">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{customer.name}</h5>
                            <small>{customer.zip}</small>
                        </div>
                        <p className="mb-1">{customer.city}</p>
                        <small>{customer.address}</small>
                    </article>
                ))
            }
        </div>
    )
}
