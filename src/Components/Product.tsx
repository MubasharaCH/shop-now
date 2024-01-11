import React from "react";
import SingleProduct from "./SingleProduct";
import ProductCart from "./ProductCart";
const productData = [
  {
    id: 1,
    img: "/image/shirtG.png",
    title: "shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    id: 2,
    img: "/image/jacket.png",
    title: "Leather Jacket",
    desc: "Pure Leather Jackect with Good Quality for boys",
    rating: 3,
    price: "80.00",
  },
  {
    id: 3,
    img: "/image/glasses.png",
    title: "Glasses",
    desc: " flexible Transparent Glasses  ",
    rating: 5,
    price: "35.00",
  },
  {
    id: 4,
    img: "/image/heel.png",
    title: "Heel",
    desc: " A beautifull black heel ",
    rating: 4,
    price: "55.00",
  },
  {
    id: 5,
    img: "/image/PinkBag.png",
    title: "Pink Hand Bag",
    desc: "Pink Hand Bag with hangings ",
    rating: 5,
    price: "65.00",
  },
  {
    id: 6,
    img: "/image/white shoes.png",
    title: "White shoes",
    desc: " Latest White Sports Shoes ",
    rating: 4,
    price: "65.00",
  },
  {
    id: 7,
    img: "/image/blackbag.png",
    title: "Black Bag",
    desc: "Block Hand Bag for Girls ",
    rating: 5,
    price: "35.00",
  },
  {
    id: 8,
    img: "/image/bjeanshirt.png",
    title: "Blue Jean Shirt",
    desc: "Blue Jean boys Shirt ",
    rating: 5,
    price: "35.00",
  },
];

const Product = () => {
  return (
    <div>
      {productData?.map((item) => (
        <ProductCart
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Product;
