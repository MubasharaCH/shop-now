import NewProducts from "@/Components/NewProducts";
import Product from "@/Components/Product";

export default function SingleProduct() {
  return (
    <div>
      <div>
        <div className="container pt-16 ">
          <h2 className="font-medium text-2xl pb-4"> Selected Product</h2>
          <Product />
        </div>
      </div>
    </div>
  );
}
