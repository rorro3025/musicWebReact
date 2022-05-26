import React, {useState} from 'react';

import {Customer} from "../../interfaces/database";
import './style.css'

export default function CustomerForm() {

    const initialState: Customer ={
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    }
    const [customerInfo,setCustomerInfo] = useState<Customer>(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name:val,value} = event.target;
        setCustomerInfo( {...customerInfo,[val]:value})
    }
    const saveCustomer = async () => {
        return await fetch('http://localhost:8080/api/customers',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerInfo)
        } )
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        saveCustomer().then(()=>{
            alert("Customer saved successfully")
            setCustomerInfo(initialState)
        })
        console.log(customerInfo)
    }
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className={"form-control"} placeholder={"name"} onChange={handleChange} value={customerInfo.name}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder={"address"} className={"form-control"} onChange={handleChange} value={customerInfo.address}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" placeholder={"city"} className={"form-control"} onChange={handleChange} value={customerInfo.city}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="phone">State</label>
                    <input type="text" name="phone" placeholder={"phone"} className={"form-control"} onChange={handleChange} value={customerInfo.phone}/>
                </div><div className="form-group mt-2">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" placeholder={"state"} className={"form-control"} onChange={handleChange} value={customerInfo.state}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="zip">Zip code</label>
                    <input type="text" name="zip" placeholder={"zip"} className={"form-control"} onChange={handleChange} value={customerInfo.zip}/>
                </div>
                <div className="d-grid gap-2 mt-2 mb-1">
                    <input type="submit" value="Save" className={"btn btn-success"}/>
                </div>
            </form>
        </main>
    )
}