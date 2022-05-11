import Layout from "../../components/Layout";
import FormEmployee from "../../components/Forms/Employee"

export default function Management() {
    return(
        <Layout>
            <h3 className={"text-center"}>Management</h3>
            <FormEmployee />
        </Layout>
    )
}