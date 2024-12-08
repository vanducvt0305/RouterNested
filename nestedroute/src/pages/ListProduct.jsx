import React from "react";

import { Outlet, NavLink } from "react-router-dom";

const data = [
  {
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
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
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
  },
];

const renderProduct = () => {
  return data.map((item) => {
    return (
      <tr key={item.id}>
        <td className="px-4 py-2 border border-gray-300">{item.id}</td>
        <td className="px-4 py-2 border border-gray-300">{item.name}</td>
        <td className="px-4 py-2 border border-gray-300">
          <img src={item.image} alt="" width="50px" />
        </td>
        <td className="px-4 py-2 border border-gray-300">{item.price}</td>
        <td className="px-4 py-2 border border-gray-300">
          <div className="text-orange-600">
            <NavLink className="mx-2" to="update-product" state={item}>
              Edit
            </NavLink>
            |<button className="mx-2">Delete </button>|
            <NavLink className="mx-2" to="detail-product" state={item}>
              View Detail
            </NavLink>
          </div>
        </td>
      </tr>
    );
  });
};
const ListProduct = () => {
  return (
    <div className=" flex">
      <div className="nav w-1/6 bg-red-300">
        <NavLink
          className="flex items-center text-2xl mt-5"
          to="/product-management"
        >
          <i className="fa fa-home ml-2"></i>
          <div className="ml-3 ">DashBoard</div>
        </NavLink>
        <NavLink
          to="/product-management"
          className="block bg-orange-300 text-white text-2xl p-4 mt-5 mx-2"
        >
          Products
        </NavLink>
      </div>
      <div className="outlet w-5/6  bg-blue-300">
        <NavLink to="/product-management" className="block p-4 mt-2">
          Product <i className="fa fa-angle-right"></i> List
        </NavLink>
        <NavLink
          className="inline-block py-4 px-8  bg-orange-500 text-white mx-4"
          to="create-product"
        >
          New Product
        </NavLink>
        <div>
          <input
            type="text"
            className="outline-none p-3 ml-4 mt-2 rounded-l-md"
            placeholder="Search product ..."
          />
          <button className="bg-orange-500 py-3 px-4 text-white rounded-r-md">
            Search
          </button>
        </div>
        <table className="min-w-full table-auto border-collapse mt-10">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300">Id</th>
              <th className="px-4 py-2 text-left border border-gray-300">
                Name
              </th>
              <th className="px-4 py-2 text-left border border-gray-300">
                Img
              </th>
              <th className="px-4 py-2 text-left border border-gray-300">
                Price
              </th>
              <th className="px-4 py-2 text-left border border-gray-300">
                Hành Động
              </th>
            </tr>
          </thead>
          <tbody id="tbody">{renderProduct()}</tbody>
        </table>
        <Outlet />
      </div>
    </div>
  );
};

export default ListProduct;
