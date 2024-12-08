import React from "react";
import { useLocation } from "react-router-dom";
const data = {
  id: 4,
  name: "Adidas Super Star Red",
  alias: "adidas-super-star-red",
  price: 465,
  description:
    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
  shortDescription:
    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
  quantity: 542,
  image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
};

const UpdateProduct = () => {
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
          <input type="text" value={item.name} className="my-1 p-1" />
          <input type="text" value={item.price} className="my-1 p-1" />
          <input
            type="text"
            value={item.shortDescription}
            className="my-1 p-1"
          />
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
