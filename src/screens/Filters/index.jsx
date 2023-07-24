import "../../styles/general.scss";
import "../../styles/style.scss";

function FiltersSection() {
  return (
    <>
      <div className="filtersContainer">
        <span className="filtersCategory">Categories</span>
        <ul className="categoryList">
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />T shirts
            </label>
          </li>
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Longue Tshirts
            </label>
          </li>
        </ul>
      </div>
      <div className="filtersContainer">
        <span className="filtersCategory">Brand</span>
        <ul className="categoryList">
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Brand 1
            </label>
          </li>
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Brand 3
            </label>
          </li>
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Brand 4
            </label>
          </li>
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Brand 5
            </label>
          </li>
          <li>
            <label className="filterLabel">
              <input className="filtercheckbox" type="checkbox" />
              Brand 2
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FiltersSection;
