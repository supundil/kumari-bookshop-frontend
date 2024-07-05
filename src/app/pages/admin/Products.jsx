import {Container, Typography,Grid} from "@material-ui/core";
import './ProductCard.css';
import ProductGrid from "./ProductGrid";


export const Products = () => {

    return (
        <Container>
            <Typography>Products</Typography>

         <ProductGrid/>
        </Container>
    );
};