import {useParams} from "react-router-dom";

import Layout from "../../components/Layout";
import FormCustomer from "../../components/Forms/Customer"
import ListCustomers from "../../components/Lists/Customers";

export default function ManageCustomers() {
    const {id} = useParams();

    return (
        <Layout>
            <h3 className={"text-center"}>{id ? "Editing customer" : "Create new customer"}</h3>
            <ListCustomers/>
            <FormCustomer/>
        </Layout>
    )
}