import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import {
  addProductToSeller,
  deleteProductOnSeller,
  updateSellerById,
} from "../../redux/action/seller-action";
import { Product } from "../../models/product";
import { Seller } from "../../models/seller";
import FormEditProduct from "../edit-form-seller/edit-form-seller";

type Props = {
  id: string | undefined;
  seller: Seller;
};

function FormSeller({ id = "", seller }: Props) {
  const dispatch = useAppDispatch();

  const [newSeller, setNewSeller] = React.useState<{
    name: string;
    address: string;
  }>({
    name: "",
    address: "",
  });

  const [product, setProduct] = React.useState<{
    name: string;
    stock: number;
    price: number;
  }>({
    name: "",
    stock: 0,
    price: 0,
  });

  const onUpdateDataSeller = (e: React.SyntheticEvent) => {
    const { name, address } = newSeller;
    const { _id, products } = seller;

    dispatch(updateSellerById({ _id, name, address, products }));
    window.location.reload();
  };

  const addedProductToSeller = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(addProductToSeller(seller._id, product));
    window.location.reload();
  };

  React.useEffect(() => {
    setNewSeller({ name: seller.name, address: seller.address });
  }, [seller.name, seller.address]);

  return (
    <div className="col-lg-7 mt-5 ms-5 border border-primary rounded-3 p-5">
      <form>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <div className="col-12 mb-2 d-flex gap-5">
          <input
            type="text"
            className="form-control"
            placeholder="example: Juan"
            value={newSeller.name}
            onChange={(event: React.FormEvent<HTMLInputElement>): void => {
              const { value } = event.currentTarget;
              setNewSeller((item) => ({
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
            placeholder="example: Kembangan Street No.13"
            value={newSeller.address}
            onChange={(event: React.FormEvent<HTMLInputElement>): void => {
              const { value } = event.currentTarget;
              setNewSeller((item) => ({
                ...item,
                address: value,
              }));
            }}
          />
        </div>

        <div>Products</div>
        <div className="col-12 mb-2  w-100">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={product.name}
                onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                  const { value } = e.currentTarget;
                  setProduct((item) => ({
                    ...item,
                    name: value,
                  }));
                }}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                value={product.price}
                onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                  const { value } = e.currentTarget;
                  setProduct((item) => ({
                    ...item,
                    price: +value,
                  }));
                }}
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="stock"
                value={product.stock}
                onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                  const { value } = e.currentTarget;
                  setProduct((item) => ({
                    ...item,
                    stock: +value,
                  }));
                }}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-success"
                onClick={addedProductToSeller}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
          <div className="row w-100 px-3 mt-2 custome-table-scrollbar">
            <FormEditProduct id={seller._id} products={seller.products} />
          </div>
        </div>

        <div className="mt-3 w-25 d-flex gap-3">
          <button className="btn btn-primary" onClick={onUpdateDataSeller}>
            Submit
          </button>
          <Link to="../sellers/edit" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormSeller;
