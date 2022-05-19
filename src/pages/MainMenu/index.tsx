import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import CardMenuItem from '../../components/CardMenuItem';
import {useApp} from "../../store/provider";

import {options} from "./optionsData";

export default function MainMenu() {
    const {user} = useApp()
    const [userName,setUserName] = useState('')

    const getUserName = async () => {
        //http://localhost:8080/api/employees/5
        const response = await fetch(`http://localhost:8080/api/employees/${user}`)
        const {name} = await response.json()
        setUserName(name)
    }

    useEffect(() => {
        getUserName().catch(null)
    },[user])

    return (
        <Layout>
            <h1>Welcome {userName}</h1>
            <div className="container">
                <div className="grid">
                    {
                        options.map((option) => {
                            return <CardMenuItem key={option.option} option={option.option} title={option.title}
                                                 description={option.description}
                                                 link={option.link}/>
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}