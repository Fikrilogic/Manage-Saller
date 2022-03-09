import React from "react";
import { Link } from "react-router-dom";
import "./sidebar";

function Sidebar() {
  return (
    <div className="navbar col-sm-2 bg-primary sidebar-container">
      <div className="w-100 p-1 my-auto mt-5 border-top border-bottom border-light">
        <div className="accordion accordion-flush" id="sellerAccordion">
          <div className="accordion-header" id="sellerHead">
            <button
              className="accordion-button bg-primary text-white collapsed fw-bolder text-uppercase"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#SellerMenu"
              aria-expanded="true"
              aria-controls="SellerMenu"
            >
              Seller
            </button>
          </div>

          <div
            id="SellerMenu"
            className="accordion-collapse collapse show"
            aria-labelledby="sellerHead"
            data-bs-parent="#sellerAccordion"
          >
            <div className="accordion-body vstack gap-3 bg-light border border-0 rounded-2 text-start mt-1 fw-lighter">
              <div>
                <Link to="sellers" className="text-decoration-none text-black">
                  List
                </Link>
              </div>
              <div>
                <Link
                  to="sellers/add"
                  className="text-decoration-none text-black"
                >
                  Add
                </Link>
              </div>
              <div>
                <Link
                  to="sellers/edit"
                  className="text-decoration-none text-black"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
