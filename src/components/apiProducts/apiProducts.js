import React from "react";

import { useApiProducts } from "./useApiProducts";

import ProductCard from "../productCard.jsx";

import Grid from '@material-ui/core/Grid';

export default function ApiProducts() {
    const [product, loader] = useApiProducts();

    if(loader) {
        return <p>loading...</p>
    }

    const getProduct = product => {
        return (
      <Grid item xs={11} sm={4} md={3} lg={3} xl={2}>
        <ProductCard 
            image={product.image}
            title={product.title}
            price={product.price}
        />
      </Grid>
    );
    }

    return(
        <div>

            <Grid container spacing={4} justify="space-evenly">
                {
                    product.map(product => getProduct(product))
                }
            </Grid>

            {/* {
                product.map((product) => {
                    return(
                        <Grid container spacing={1}>
                        <Grid item lg={4} md={4}>
                        <RecipeReviewCard
                            // <p>{product.title}</p>
                            // <img style={{width:50}} src={product.image} alt={product.category} />
                            // <p>Category: {product.category}</p>
                            // <p>Price: {product.price}</p>
                            // <p>{product.description}</p>
                            // <hr/>

                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                        </Grid>
                        </Grid>
                    )
                })
            } */}

        </div>
    )
}