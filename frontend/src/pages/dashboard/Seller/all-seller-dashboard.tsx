import React from "react";
import Table from "../../../components/table/table";
import { fetchAllSeller } from "../../../redux/action/seller-action";
import { sellerSelector } from "../../../redux/slice/seller-slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";

function LookSeller() {
  const dispatch = useAppDispatch();
  const data = useSelector(sellerSelector);

  React.useEffect(() => {
    dispatch(fetchAllSeller());
  }, [dispatch]);

  return (
    <div className="col-lg-12">
      <div className="w-100 mx-4 my-4">
        <h2 className="card-title text-capitalize">List Sellers</h2>
      </div>

      <Table isEdit={false} isDelete={true} seller={data.sellers} />
    </div>
  );
}

export default LookSeller;
