import React from "react";
import { Product } from "../../models/product";
import { convertTimeToUnix } from "../../utils/utils";
import "./product-table.css";
import { useAppDispatch } from "../../redux/store";
import { deleteDataFromProducts } from "../../redux/action/product-action";
import { productSelector } from "../../redux/slice/product-slice";
import { useSelector } from "react-redux";

function ProductTable() {
  const { products } = useSelector(productSelector);
  const dispatch = useAppDispatch();

  const deleteProduct = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const currentIndex =
      event.currentTarget.parentNode?.parentNode?.firstChild?.textContent;

    if (typeof currentIndex === "string") {
      dispatch(deleteDataFromProducts(+currentIndex));
    }
  };

  return (
    <div className="row w-100 px-3 mt-2 custome-table-scrollbar">
      <table className=" w-100 table table-sm border border-dark border-1 table-striped table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length !== 0 || typeof products !== "undefined" ? (
            products.map((item: Product, index: number) => (
              <tr key={convertTimeToUnix.toString()}>
                <th>{index}</th>
                <th>{item.name}</th>
                <th>{item.stock}</th>
                <th>{item.price}</th>
                <th>
                  <button
                    className="btn btn-outline-danger"
                    onClick={deleteProduct}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
