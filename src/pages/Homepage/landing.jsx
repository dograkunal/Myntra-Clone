import React from "react";
import HeaderSection from '../../screens/Header';
import FiltersSection from '../../screens/Filters';
import ProductsSection from '../../screens/Products';
import "../../styles/general.scss";
import "../../styles/style.scss";
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
