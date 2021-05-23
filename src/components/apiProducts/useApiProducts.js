import {useEffect, useState} from "react";
import { endpoint } from "../../config/endpoint";

export function useApiProducts() {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchProdcts = async () => {
        try {
            setLoader(true);
            const product = await fetch(`${endpoint}/products`);
            setProduct(await product.json());
        }
        catch(err) {
            console.log("Exception Error is: ", err);
        }
        finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        fetchProdcts();
    }, [])

    return [product, loader];
}