import {useState, useEffect} from "react";
import {Product} from "../../interfaces/database";
import DisplayTotal from "../DisplayTotal";


export default function Sales() {
    const [products, setProducts] = useState<Product[]>([]);
    const [prices, setPrices] = useState<number[]>([0]);
    const getProductsList = async () => {
        //http://localhost:8080/api/products
        const response = await fetch("http://localhost:8080/api/products");
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProductsList().catch(null);
    }, [])

    const handleClick = (val: number) => {
        setPrices([...prices, val]);
        console.log(prices);
    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <ul className={"list-group"}>
                    {
                        products.map(product => (
                            <li className={"list-group-item"} key={product.id}>
                                <h3>{product.title.toUpperCase()}</h3>
                                <p>{product.artist}</p>
                                <p>{product.salePrice}</p>
                                <button className="btn btn-primary" onClick={() => handleClick(product.salePrice)}>Add</button>
                            </li>
                        ))
                    }
                </ul> </div>
            <div className="col-lg-6">
                <DisplayTotal price={prices.reduce((x,y)=>x+y)}/>
            </div>
        </div>
    )
}