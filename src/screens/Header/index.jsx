import '../../styles/general.scss';
import '../../styles/style.scss';
import Logo from "../../assets/Myntra.png";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from './Cart';
function HeaderSection() {
  return (
    <>
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={Logo} alt="Myntra Logo" className="brandLogo" />
        </div>
        <nav className="headerNavBar">
          <a href="#" className="navBarLink padding-1">
            Men
          </a>
          <a href="#" className="navBarLink padding-1">
            Women
          </a>
          <a href="#" className="navBarLink padding-1">
            Kids
          </a>
          <a href="#" className="navBarLink padding-1">
            Home & Living
          </a>
          <a href="#" className="navBarLink padding-1">
            Beauty
          </a>
          <a href="#" className="navBarLink padding-1">
            Studio
          </a>
        </nav>
        <div className="searchBar">
          <input type="text" placeholder="Search for Products" />
        </div>
        <div className="headerActions">
          <div className="Profile">
            <span>
              <AiOutlineUser size="20px" />
            </span>
            <span>
              <a href="#" className="navBarLink padding-2">
                Profile
              </a>
            </span>
          </div>
          <div className=" Profile">
            <span>
              <AiOutlineHeart size="20px" />
            </span>
            <span>
              <a href="#" className="navBarLink padding-2">
                Wishlist
              </a>
            </span>
          </div>
          <div className="Profile">
            <span>
              <HiOutlineShoppingBag size="20px" />
            </span>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
