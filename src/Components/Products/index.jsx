import "../general.scss";
import "../style.scss";
import Demo from "../../assets/demo.jpg";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

function ProductsSection() {
  return (
    <>
      <li className="productCard">
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
            <span className="wishlist">
              <div className="wishListWrap">
                <span>
                  <AiOutlineHeart size="20px" />
                </span>
                <span className="wishlistText">Wishlist</span>
              </div>
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
    </>
  );
}

export default ProductsSection;
