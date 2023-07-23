import React, { useState } from "react";
import Demo from "../../assets/demo.jpg";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  EditProductInCart,
} from "../Reducers/cartSlice";
import { useSelector } from "react-redux";
import "../general.scss";
import "../style.scss";

function ProductsSection() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state.ProductCount?.cart);
  console.log(ProductList, "List");

  const handleAddClick = (el) => {
    // debugger;
    let newData = {
      ProductId: el.ProductId,
      ProductCount: el.ProductCount + 1,
    };
    dispatch(EditProductInCart(newData));
  };

  const handleRemoveClick = (el) => {
    // debugger;
    let newData = {
      ProductId: el.ProductId,
      ProductCount: el.ProductCount - 1,
    };
    dispatch(EditProductInCart(newData));
  };

  return (
    <>
      {ProductList &&
        ProductList.map((el) => (
          <li className="productCard" key={el.ProductId}>
            <div className="productImage">
              <img src={Demo} alt="Product Image" />
            </div>
            <div className="ratingContainer">
              <span>4.2</span>
              <span>
                <AiFillStar color="green" />
              </span>
              <div className="starCount"> 29.8k</div>
            </div>
            <div className="productTitle">
              <div className="productHoverWraper">
                <span className="wishlist wishlistMargin">
                  <div className="wishListWrap">
                    <span>
                      <AiOutlineHeart size="20px" />
                    </span>
                    <span className="wishlistText">Wishlist</span>
                  </div>
                </span>
                <span>
                  {el.ProductCount === 0 ? (
                    <span
                      className="wishlist cartMargin"
                      onClick={() => {
                        handleAddClick(el);
                      }}
                    >
                      <div className="wishListWrap">
                        <span className="wishlistText">Add to Cart</span>
                      </div>
                    </span>
                  ) : (
                    <span className="addtoCart">
                      <div
                        onClick={() => {
                          handleRemoveClick(el);
                        }}
                      >
                        <strong>-</strong>
                      </div>
                      <div>{el.ProductCount}</div>
                      <div
                        onClick={() => {
                          handleAddClick(el);
                        }}
                      >
                        <strong>+</strong>
                      </div>
                    </span>
                  )}
                </span>
                <div className="sizes">
                  <p>Sizes: L/XXL</p>
                </div>
              </div>
              <div>
                <h3 className="productBrand">Roadster</h3>
                <h4 className="productInfo">Men Cotton Pure Cotton T-shirt</h4>
              </div>
              <span className="productPrice">
                <span className="priceDiscounted">Rs. 289</span>
                <span className="priceOriginal">Rs. 499</span>
                <span className="DiscountPercent">(42% OFF)</span>
              </span>
            </div>
          </li>
        ))}
    </>
  );
}

export default ProductsSection;
