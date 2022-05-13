import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import FormEmployee from "../../components/Forms/Employee"
import FormCustomer from "../../components/Forms/Customer"

export default function Management() {
    const {object, id} = useParams();
    const [editing, setEditing] = useState(false);
    const [objective, setObjective] = useState<string | undefined>("");
    useEffect(() => {
        id ? setEditing(true) : setEditing(false);
        setObjective(object);
        console.log(object)
    }, [])
    return (
        <Layout>
            <h3 className={"text-center"}>{editing ? "Update an " + {object} : "Save an " + {object}}</h3>
            {objective === "employee"? <FormEmployee/>: null}
            {objective === "customer"? <FormCustomer/>: null}
        </Layout>
    )
}