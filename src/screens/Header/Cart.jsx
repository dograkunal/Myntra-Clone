import React from "react";
import '../../styles/general.scss';
import '../../styles/style.scss';

function Cart() {
  return (
    <>
      <span>
        <a href={`/cart`} className="navBarLink padding-2">
          Bag
        </a>
      </span>
    </>
  );
}

export default Cart;
