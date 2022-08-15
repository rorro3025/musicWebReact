import {useState, useEffect} from "react";
import {Product} from "../../interfaces/database";
import DisplayTotal from "../DisplayTotal";
import {useApp} from "../../store/provider";
import {getProductsByStore} from "./controller";

export default function ShopList() {
    const {outlet} = useApp();
    const [products, setProducts] = useState<Product[]>([]);
    const [prices, setPrices] = useState<number[]>([0]);

    useEffect(() => {
        getProductsByStore(outlet).then((data => setProducts(data)));
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
                                <h3>Albun: {product.title.toUpperCase()}</h3>
                                <p>Artist: {product.artist}</p>
                                <p>Price: {product.salePrice}</p>
                                <p>Existence: {product.inventory}</p>
                                <button className="btn btn-primary" onClick={() => handleClick(product.salePrice)} disabled={product.inventory?product.inventory<1:false}>
                                    Add
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-lg-6">
                <DisplayTotal price={prices.reduce((x, y) => x + y)}/>
            </div>
        </div>
    )
}