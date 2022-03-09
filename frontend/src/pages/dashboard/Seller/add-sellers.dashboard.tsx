import React from "react";
import ProductTable from "../../../components/product-table/product-table";
import { Product } from "../../../models/product";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../redux/store";
import {
  addedDataToProducts,
  resetProductsAfterSubmit,
} from "../../../redux/action/product-action";
import { productSelector } from "../../../redux/slice/product-slice";
import { useSelector } from "react-redux";
import { addSeller } from "../../../redux/action/seller-action";

const initialProductState = {
  name: "",
  stock: 0,
  price: 0,
};
const initialSellerState = { name: "", address: "" };

function AddSellerDashboard() {
  const [sellerData, setSellerData] = React.useState<{
    name: string;
    address: string;
  }>(initialSellerState);
  const [product, setProduct] = React.useState<Product>(initialProductState);

  const dispatch = useAppDispatch();
  const { products } = useSelector(productSelector);
  const navigate = useNavigate();

  const addProductToList = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(addedDataToProducts(product));
    setProduct(initialProductState);
  };

  const submitSeller = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, address } = sellerData;

    dispatch(addSeller({ name, address, product: products }));
    dispatch(resetProductsAfterSubmit());
    setSellerData(initialSellerState);
    navigate("../sellers");
  };

  return (
    <div className="col-lg-12 p-3">
      <div className="col-sm-3 mx-4 my-4">
        <h2 className="card-title text-capitalize">Add New Sellers</h2>
      </div>

      <div
        className="toast bg-success"
        role={"alert"}
        aria-live="assertive"
        aria-atomic="true"
        id="toastSuccess"
      >
        <div className="toast-body d-flex">
          <h5 className="me-auto">Success added data</h5>

          <button
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="close"
          ></button>
        </div>
      </div>

      <div className="col-md-7 mt-5 ms-5 border border-primary rounded-3 p-5">
        <form>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <div className="col-12 mb-2 d-flex gap-5">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="example: Juan"
              defaultValue={sellerData.name}
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                const { value } = e.currentTarget;
                setSellerData((item) => ({
                  ...item,
                  name: value,
                }));
              }}
            />
          </div>
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <div className="col-12 mb-2 d-flex gap-5">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="example: Kembangan Street No.13"
              defaultValue={sellerData.address}
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                const { value } = e.currentTarget;
                setSellerData((item) => ({
                  ...item,
                  address: value,
                }));
              }}
            />
          </div>

          <div>Products</div>
          <div className="col-12 mb-2  w-100">
            <div className="row">
              <div className="col-4 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Name"
                  value={product.name}
                  onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                    const { value } = e.currentTarget;
                    setProduct((product?) => ({
                      ...product,
                      name: value,
                    }));
                  }}
                />
                <label htmlFor="productName">Name</label>
              </div>
              <div className="col-3 form-floating ">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  id="productPrice"
                  value={product.price}
                  onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                    const { value } = e.currentTarget;
                    setProduct((product) => ({
                      ...product,
                      price: +value,
                    }));
                  }}
                />
                <label htmlFor="productPrice">Price</label>
              </div>
              <div className="col-2 form-floating">
                <input
                  type="number"
                  className="form-control"
                  placeholder="stock"
                  id="productStock"
                  value={product.stock}
                  onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                    const { value } = e.currentTarget;
                    setProduct((product) => ({
                      ...product,
                      stock: +value,
                    }));
                  }}
                />
                <label htmlFor="productStock">Stock</label>
              </div>
              <div className="col-2">
                <button className="btn btn-success" onClick={addProductToList}>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
            <ProductTable />
          </div>

          <div className="mt-3 w-25 d-flex gap-3">
            <button className="btn btn-primary" onClick={submitSeller}>
              Submit
            </button>
            <Link
              to="../sellers"
              className="btn btn-danger text-decoration-none"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSellerDashboard;
