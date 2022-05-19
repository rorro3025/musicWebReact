import Layout from "../components/Layout";
import ShopList from "../components/ShopList";

export default function Sales() {
    return (
        <Layout>
            <h1>Sales</h1>
            <div className="container">
                <ShopList />
            </div>
        </Layout>
    )
}

