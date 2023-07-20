import "../general.scss";
import "../style.scss";
import Demo from "../../assets/demo.jpg";

function ProductsSection() {
  return (
    <>
      <li className="productCard">
        <div className="productImage">
          <img src={Demo} alt="Product Image" />
        </div>
        <div className="productSize">New Data</div>
        <div className="productTitle">
          <h3 className="productBrand">Roadster</h3>
          <h4 className="productInfo">Men Cotton Pure Cotton T-shirt</h4>
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
