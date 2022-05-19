import Layout from '../../components/Layout';
import CardMenuItem from '../../components/CardMenuItem';
import {useApp} from "../../store/provider";

export default function MainMenu() {
    const {user} = useApp()
    const titles = ["Do a sale", "Process a return", "Manage employees and customers", "Manage products"];
    return (
        <Layout>
            <h1>Welcome {user}</h1>
            <div className="container">
               <div className="grid">
                   {
                       titles.map((title, index) => {
                           return <CardMenuItem key={index} option={index} title={title}/>
                       })
                   }
               </div>
            </div>
        </Layout>
    );
}