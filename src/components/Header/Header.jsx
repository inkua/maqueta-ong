import Image from "next/image";
import logo from "assets/logo.png";
/**
 * @todo style component Image
 * @see https://dev.to/david4473/working-with-images-in-next-js-48d6
 */
function Header() {
  return (
    <header className="container-fluid">
      <div className="container">
        <div
          id="header"
          className="d-flex flex-wrap justify-content-center py-3 mb-4"
        >
          <a
            href="#top"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis"
          >
            <Image src={logo} alt="" width={30} height={30} className="bi me-2" />
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#top" className="nav-link px-2 text-dark">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#top" className="nav-link px-2 text-dark">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#top" className="nav-link px-2 text-dark">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="#top" className="nav-link px-2 text-dark">
                Volunteer
              </a>
            </li>
          </ul>

          <div
            id="buttons"
            className="d-flex justify-content-center align-items-center gap-2"
          >
            <input
              type="button"
              value="Get Help"
              className="btn btn-outline-dark"
            />
            <input type="button" value="Volunteer" className="btn btn-dark" />
          </div>

          <div className="d-flex align-items-center justify-content-center " id="wrap-toggle">
            <input type="checkbox" id="switcher" />
            <label htmlFor="switcher" data-checked="EN" data-unchecked="UKY" className="check"></label>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
