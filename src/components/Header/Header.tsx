import Image from "next/image";
import DATA from "data/ong";
import Navitem from "./Navitem";
import Link from "next/link";
import { useState } from "react";
/**
 * @todo style component Image
 * @see https://dev.to/david4473/working-with-images-in-next-js-48d6
 */

const Menu_List = [
  {
    texto: "Home",
    href: "#top",
  },
  {
    texto: "About Us",
    href: "#top",
  },
  {
    texto: "News",
    href: "#top",
  },
  {
    texto: "Volunteer",
    href: "#top",
  },
];

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href = {"/"} legacyBehavior>
            <a onClick = { () => setActiveIdx(0) }>
              <Image src = { DATA.logo } alt="logo" />
            </a>
          </Link>
        </div>

        <nav className="nav">

          <div className = "nav__menu-bar" onClick = { () => setNavActive(!navActive) }>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className = { `${navActive ? "active" : ""} nav__menu-list` }>
            {
              Menu_List.map((menu, idx) => {
                return(
                  <div key = {menu.texto} onClick = { () => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}>
                    <Navitem active = { activeIdx === idx } { ...menu } />
                  </div>
                )
              })
            }
          </div>

          <div className="buttons">
            <input type="button" value="Get Help" className="btn_help" />
            <input type="button" value="VOLUNTEER" className="btn_volunteer"/>
            <div className="wrap-toggle">
              <input type="checkbox" id="switcher" />
              <label htmlFor="switcher" data-checked="EN" data-unchecked="UKY" className="check"></label>
            </div>
          </div>
          
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
