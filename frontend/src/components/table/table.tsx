import React from "react";
import { Seller } from "../../models/seller";
import {
  deleteSeller,
  updateSellerById,
  fetchAllSeller,
} from "../../redux/action/seller-action";
import { useAppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

type TableProps = {
  isEdit: boolean;
  isDelete: boolean;
  seller: Seller[];
};

function Table({ isEdit, isDelete, seller = [] }: TableProps) {
  const dispatch = useAppDispatch();

  const deleteDataSeller = (e: React.SyntheticEvent) => {
    const id =
      e.currentTarget.parentNode?.parentElement?.getAttribute("data-reactid");

    if (typeof id === "string") {
      dispatch(deleteSeller(id));
      dispatch(fetchAllSeller());
    }
  };

  return (
    <div className="w-100 p-5">
      <table className="table caption-top table-striped table-hover main-table">
        <caption></caption>
        <thead className="border border-2 border-primary table-primary">
          <tr>
            <th>No</th>
            <th className="w-25">Name</th>
            <th>address</th>
            <th className="w-25">action</th>
          </tr>
        </thead>
        <tbody className="border border-2 border-primary">
          {seller.length !== 0 ? (
            seller.map((value: Seller, index: number) => (
              <tr data-reactid={value._id} key={value._id}>
                <th>{index + 1}</th>
                <th>{value.name}</th>
                <th>{value.address}</th>
                <th>
                  {isDelete ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={deleteDataSeller}
                    >
                      <i className="bi bi-trash"></i> delete
                    </button>
                  ) : (
                    <Link
                      className="btn btn-outline-success"
                      to={`./${value._id}`}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </Link>
                  )}
                </th>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
