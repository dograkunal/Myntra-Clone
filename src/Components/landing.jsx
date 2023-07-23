import React from "react";
import "./style.scss";
import "./general.scss";
import FiltersSection from "./Filters";
import ProductsSection from "./Products";
import HeaderSection from "./Header";

function landing() {
  return (
    <>
      <header className="DesktopHeader container">
        <HeaderSection />
      </header>
      <main className="DesktopMain grid gridColMain container">
        <section className="filterSection">
          <FiltersSection />;
        </section>
        <section className="productsSection">
          <div className="productsContainer">
            <ul className="productsCardBase">
              <ProductsSection />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default landing;
