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
    <div className="col-lg-7 mx-auto mt-5">
      <table className="table table-sm caption-top table-striped table-hover">
        <caption></caption>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>address</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {seller.length !== 0 ? (
            seller.map((value: Seller, index: number) => (
              <tr data-reactid={value._id} key={value._id}>
                <th>{index + 1}</th>
                <th>{value.name}</th>
                <th>{value.address}</th>
                <th className="d-flex gap-2 px-2">
                  {isDelete ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={deleteDataSeller}
                    >
                      <i className="bi bi-trash"></i> delete
                    </button>
                  ) : (
                    ""
                  )}
                  {isEdit ? (
                    <Link
                      className="btn btn-outline-success"
                      to={`./${value._id}`}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </Link>
                  ) : (
                    ""
                  )}
                </th>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <nav>
        <ul className="pagination mx-auto justify-content-center">
          <li className="page-item">
            <div className="page-link">Previous</div>
          </li>
          <li className="page-item">
            <div className="page-link">1</div>
          </li>
          <li className="page-item">
            <div className="page-link">2</div>
          </li>
          <li className="page-item">
            <div className="page-link">3</div>
          </li>
          <li className="page-item">
            <div className="page-link">Next</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Table;
