import { useDispatch } from "react-redux";
import { EditProductInCart } from "../Reducers/cartSlice";
import { useSelector } from "react-redux";

function AddToCart({ el }) {
  const dispatch = useDispatch();

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
    </>
  );
}

export default AddToCart;
