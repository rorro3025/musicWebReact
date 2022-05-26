import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import FormEmployee from "../../components/Forms/Employee"
import ListAllEmployees from "../../components/Lists/Employees";

export default function Management() {
    const {id} = useParams();

    return (
        <Layout>
            <h3 className={"text-center"}>{id ? "Editing employee" : "Create new employee"}</h3>
            <ListAllEmployees/>
            <FormEmployee/>
        </Layout>
    )
}