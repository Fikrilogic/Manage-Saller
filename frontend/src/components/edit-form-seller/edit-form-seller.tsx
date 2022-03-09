import React from "react";
import { Product } from "../../models/product";
import { deleteProductOnSeller } from "../../redux/action/seller-action";
import { useAppDispatch } from "../../redux/store";

type Props = {
  products: Product[];
  id?: string;
};

function FormEditProduct({ products = [], id = "" }: Props) {
  const dispatch = useAppDispatch();

  const deleteCurrentProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const productId =
      e.currentTarget.parentNode?.parentElement?.getAttribute("data-reactid");
    const name = e.currentTarget.getAttribute("data-reactid");
    try {
      dispatch(deleteProductOnSeller(id, productId, name));
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
        {products.length !== 0
          ? products.map((item: Product, index: number) => (
              <tr key={index} data-reactid={item._id}>
                <th>{index + 1}</th>
                <th>{item.name}</th>
                <th>{item.stock}</th>
                <th>{item.price}</th>
                <th>
                  <button
                    className="btn btn-outline-danger"
                    onClick={deleteCurrentProduct}
                    data-reactid={item.name}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </th>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

export default FormEditProduct;
