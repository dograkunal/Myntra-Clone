import "../general.scss";
import "../style.scss";
import Logo from "../../assets/Myntra.png";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

function HeaderSection() {
  return (
    <>
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
          <div className="navBarLink Profile">
            <span className="ProfileImg">
              <AiOutlineUser size="20px" />
            </span>
            <span className="ProfileText">Profile</span>
          </div>
          <div className=" Profile">
            <span>
              <AiOutlineHeart size="20px" />
            </span>
            <span>
              <a href="#" className="navBarLink">
                Wishlist
              </a>
            </span>
          </div>
          <div className="Profile">
            <span>
              <HiOutlineShoppingBag size="20px" />
            </span>
            <span>
              <a href="#" className="navBarLink">
                Bag
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
