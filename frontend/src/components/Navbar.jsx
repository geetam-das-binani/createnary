import "../styles/navbar.css";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { useEffect, useRef } from "react";
const Navbar = () => {
  const menuRef = useRef();
  const handleToogle = () => {
    if (menuRef.current) {
      if (menuRef.current.classList.contains("show__tabs")) {
        menuRef.current.classList.remove("show__tabs");
      } else {
        menuRef.current.classList.add("show__tabs");
      }
    }
  };
  return (
    <header>
      <nav>
        <div className="left__section__nav">
          <p>Createnary</p>
          <span className="search__container">
            <IoIosSearch className="search__icon" />
            <input
              type="text"
              className="search"
              placeholder="Search Creators"
            />
          </span>
        </div>
        <div ref={menuRef} className="right__section__nav show__tabs">
          <div>
            <CiShoppingCart />
            Cart
          </div>
          <div>
            <AiOutlineExclamationCircle /> About
          </div>
          <div>
            <SlEarphonesAlt />
            Contact
          </div>
          <div className="login__tab">
            Login <MdExpandMore />
          </div>
        </div>
        <MdMenu onClick={handleToogle} size={25} className="menu__icon" />
      </nav>
    </header>
  );
};

export default Navbar;
