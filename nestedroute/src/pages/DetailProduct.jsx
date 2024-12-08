import React from "react";
import { useLocation } from "react-router-dom";
const data = {
  id: 1,
  name: "Adidas Prophere",
  alias: "adidas-prophere",
  price: 350,
  description:
    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
  shortDescription:
    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
  quantity: 995,
  image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
};

const DetailProduct = () => {
  const location = useLocation();
  let item = location.state;
  return (
    <div>
      <div className="text-2xl text-center">Update Product</div>
      <div className="flex items-center">
        <div>
          <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col text-xl">
          <div>{item.name}</div>
          <div>{item.price}$</div>
          <div>{item.shortDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
