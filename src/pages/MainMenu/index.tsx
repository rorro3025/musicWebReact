import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import CardMenuItem from '../../components/CardMenuItem';
import {useApp} from "../../store/provider";
import {getUserInfo} from "./controller";
import {options} from "./optionsData";

export default function MainMenu() {
    const {user} = useApp()
    const [userName,setUserName] = useState('unknown')

    useEffect(() => {
        getUserInfo(user).then(res => setUserName(res.name))
    },[])

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