import React from "react";
import Table from "../../../components/table/table";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { fetchAllSeller } from "../../../redux/action/seller-action";
import { sellerSelector } from "../../../redux/slice/seller-slice";

function EditSellerDashboard() {
  const dispatch = useAppDispatch();
  const data = useSelector(sellerSelector);

  React.useEffect(() => {
    dispatch(fetchAllSeller);
  }, [dispatch]);

  return (
    <div className="col-lg-7 px-5">
      <div className="w-50 mt-3 mb-5">
        <h2 className="card-title text-capitalize">Edit Seller</h2>
      </div>

      <Table isDelete={false} isEdit={true} seller={data.sellers} />
    </div>
  );
}

export default EditSellerDashboard;
