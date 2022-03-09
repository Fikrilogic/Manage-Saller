import React from "react";
import FormSeller from "../../../components/form-seller/form-seller";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { sellerSelector } from "../../../redux/slice/seller-slice";
import { useAppDispatch } from "../../../redux/store";
import { fetchSellerById } from "../../../redux/action/seller-action";

function EditData() {
  const { id } = useParams();
  const { seller } = useSelector(sellerSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (typeof id !== undefined) {
      dispatch(fetchSellerById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="col-lg-12 p-3">
      <div className="col-sm-3 mx-4 my-4">
        <h2 className="card-title text-capitalize">Edit Seller Data</h2>
      </div>

      <FormSeller id={id} seller={seller} />
    </div>
  );
}

export default EditData;
