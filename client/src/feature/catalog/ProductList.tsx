import { Grid } from "@mui/material";
import { Product } from "../../App/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}
export default function PorductList({ products }: Props) {
  return (
    <>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={4}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
