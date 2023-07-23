import React from "react";
import "./style.scss";
import "../general.scss";
import Logo from "../../assets/Myntra.png";
import ShipLogo from "../../assets/ship-charge.jpg";
import Demo from "../../assets/demo.jpg";
import { PiKeyReturnThin } from "react-icons/pi";

function CartComponent() {
  return (
    <>
      <header className="cartHeader container">
        <div className="logoContainer">
          <img src={Logo} alt="Myntra Logo" className="brandLogo" />
        </div>
      </header>
      <section className="midSection">Timer</section>
      <main className="cartMain ">
        <section className="selectedItems ">
          <div className="pincodeBox fontWeight700">
            <span>Check delivery time & services</span>
            <span>
              <button>Enter Pin Code</button>
            </span>
          </div>
          <div className="pincodeBox">
            <span className="pincodeText">
              <img src={ShipLogo} alt="shiping logo" />
              <p>
                Login to <strong>avoid convenience fee</strong> on your first
                order
              </p>
            </span>
          </div>
          <div className="addedProducts">
            <div>
              <img src={Demo} alt="Demo Image" />
            </div>
            <div className="productDetails">
              <h3 className="brandName">Roadster</h3>
              <p className="productDiscription">
                Men Black Cotton Pure Cotton T-shirt
              </p>
              <div className="productSeller">Sold by : Turnet Comers</div>
              <span className="productQtyWrap">
                <span className="qtyButton">Size: L</span>
                <span className="qtyButton">Qty: 1</span>
              </span>
              <div className="returnWrap">
                <span className="returnLogo">
                  <PiKeyReturnThin size="18px" />
                </span>
                <span className="productReturn">
                  <span>14 Days</span> return available
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="totalCost">
          <div className="couponsSection">
            <div className="couponHeader">Coupons</div>
            <div className="couponContent">
              <div>Apply Coupon</div>
              <button>Apply</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CartComponent;
