import Layout from "../../components/Layout";
import SelectEmployee from "../../components/Select/EmployeeSelect";
import SelectOutlet from "../../components/Select/SelectOutlet";

export default function Home() {

    return (
        <Layout>
            <h1>Home</h1>
            <div className={"container"}>
                select an option
                <div className="row mt-2">
                    <div className="col-sm-1 col-md-6">
                        <SelectOutlet/>
                    </div>
                    <div className="col-sm-1 col-md-6">
                        <SelectEmployee/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
