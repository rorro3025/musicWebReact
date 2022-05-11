import {useState} from "react";

import Layout from "../../components/Layout";
import {Employee} from "../../interfaces/database";

export default function Home() {
  const [data, setData] = useState<Employee[]>([{id: 1, name: "John",outletId:4},{id: 2, name: "Jane",outletId:4},{id: 3, name: "Jack",outletId:4}]);

  return (
    <Layout>
      <h1>Home</h1>
        <div className={"container"}>
           select an option
            <ul>
                <li>add employee</li>
                <li>add customer</li>
                <li>add outlet</li>
                <li>add product</li>
            </ul>

            <div className="container">
                <ol>
                    {data.map((item:Employee)=> (
                        <li key={item.id}>{item.name}
                            <ul>
                                <li>{item.outletId}</li>
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    </Layout>
  );
}
