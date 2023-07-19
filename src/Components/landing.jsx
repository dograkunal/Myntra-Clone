import React from "react";
import "./style.scss";
import "./general.scss";
import Demo from "../assets/demo.jpg";
import Logo from "../assets/Myntra.png";

function landing() {
  return (
    <>
      <header className="DesktopHeader container">
        <div className="headerContainer">
          <div className="logoContainer">
            <img src={Logo} alt="Myntra Logo" className="brandLogo" />
          </div>
          <nav className="headerNavBar">
            <a href="#" className="navBarLink">
              Men
            </a>
            <a href="#" className="navBarLink">
              Women
            </a>
            <a href="#" className="navBarLink">
              Kids
            </a>
            <a href="#" className="navBarLink">
              Home & Living
            </a>
            <a href="#" className="navBarLink">
              Beauty
            </a>
            <a href="#" className="navBarLink">
              Studio
            </a>
          </nav>
          <div className="searchBar">
            <input type="text" placeholder="Search for Products" />
          </div>
          <div className="headerActions">
            <div className="navBarLink Profile">Profile</div>
            <a href="#" className="navBarLink">
              Wishlist
            </a>
            <a href="#" className="navBarLink">
              Bag
            </a>
          </div>
        </div>
      </header>
      <main className="DesktopMain grid gridColMain container">
        <section className="filterSection">
          <div className="FiltersContainer">
            <div className="Filters">Filter 1</div>
            <div className="Filters">Filter 2</div>
            <div className="Filters">Filter 3</div>
            <div className="Filters">Filter 4</div>
            <div className="Filters">Filter 5</div>
          </div>
        </section>
        <section className="productsSection">
          <div className="productsContainer">
            <ul className="productsCardBase">
              <li className="productCard">
                <div className="productImage">
                  <img src={Demo} alt="Product Image" />
                </div>
                <div className="productTitle">
                  <h3 className="productBrand">Roadster</h3>
                  <h4 className="productInfo">
                    Men Cotton Pure Cotton T-shirt
                  </h4>
                  <span className="productPrice">
                    <span className="priceDiscounted">Rs. 289</span>
                    <span className="priceOriginal">Rs. 499</span>
                    <span className="DiscountPercent">(42% OFF)</span>
                  </span>
                </div>
              </li>
              <li className="productCard">
                <div className="productImage">
                  <img src={Demo} alt="Product Image" />
                </div>
                <div className="productTitle">
                  <h3 className="productBrand">Roadster</h3>
                  <h4 className="productInfo">
                    Men Cotton Pure Cotton T-shirt
                  </h4>
                  <span className="productPrice">
                    <span className="priceDiscounted">Rs. 289</span>
                    <span className="priceOriginal">Rs. 499</span>
                    <span className="DiscountPercent">(42% OFF)</span>
                  </span>
                </div>
              </li>
              <li className="productCard">
                <div className="productImage">
                  <img src={Demo} alt="Product Image" />
                </div>
                <div className="productTitle">
                  <h3 className="productBrand">Roadster</h3>
                  <h4 className="productInfo">
                    Men Cotton Pure Cotton T-shirt
                  </h4>
                  <span className="productPrice">
                    <span className="priceDiscounted">Rs. 289</span>
                    <span className="priceOriginal">Rs. 499</span>
                    <span className="DiscountPercent">(42% OFF)</span>
                  </span>
                </div>
              </li>
              <li className="productCard">
                <div className="productImage">
                  <img src={Demo} alt="Product Image" />
                </div>
                <div className="productTitle">
                  <h3 className="productBrand">Roadster</h3>
                  <h4 className="productInfo">
                    Men Cotton Pure Cotton T-shirt
                  </h4>
                  <span className="productPrice">
                    <span className="priceDiscounted">Rs. 289</span>
                    <span className="priceOriginal">Rs. 499</span>
                    <span className="DiscountPercent">(42% OFF)</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default landing;
