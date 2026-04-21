import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top border-bottom p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.png" alt="" style={{ width: "25%" }} />
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/signup">
              Signup
            </Link>
            <Link className="nav-link active" to="/about">
              About
            </Link>
            <Link className="nav-link active" to="/products">
              Products
            </Link>
            <Link className="nav-link active" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link active" to="/support">
              Support
            </Link>
            <i
              style={{ fontSize: "20px", marginTop: "4px" }}
              className="fa-solid fa-bars nav-link active"
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
