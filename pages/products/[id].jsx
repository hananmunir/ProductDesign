import React, { useState } from "react";
import { useRouter } from "next/router";
const dummycards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6",
  },
];
export default function Product() {
  const router = useRouter();
  console.log(typeof router.query.id);
  const [product, setProduct] = useState(
    dummycards.find((p) => p.id === parseInt(router.query.id))
  );
  //get id from url
  console.log(product);
  return (
    <div style={{ width: "100%", height: "50vh", position: "relative" }}>
      <img
        src='/Images/product.jpg'
        style={{ height: "100%", width: "100%" }}
      />
      <span
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          fontSize: "2rem",
        }}
      >
        {product?.title}
      </span>
    </div>
  );
}
