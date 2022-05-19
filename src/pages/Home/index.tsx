import {useState} from "react";
import Layout from "../../components/Layout";
import SelectEmployee from "../../components/Select/EmployeeSelect";
import SelectOutlet from "../../components/Select/SelectOutlet";
import AlertMessageError from "../../components/ErrorAlert";

export default function Home() {
    const [isError, setIsError] = useState<boolean>(false)

    return (
        <Layout>
            <h1>Home</h1>
            <div className={"container"}>
                <div className="row">
                    {isError &&
                        <AlertMessageError title={"Error sending"} description={"Select a name from the list"}/>}
                </div>
                select an option
                <div className="row mt-2">
                    <div className="col-lg-6 col-md-12 col-sm-12  mt-md-3 mt-sm-3">
                        <SelectOutlet/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12  mt-md-3 mt-sm-3">
                        <SelectEmployee handleError={setIsError}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
