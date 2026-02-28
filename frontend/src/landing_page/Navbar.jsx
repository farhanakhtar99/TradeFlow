import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top border-bottom p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.png" alt="" style={{ width: "25%" }} />
        </Link>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/signup">
              Signup
            </Link>
            <Link class="nav-link active" to="/about">
              About
            </Link>
            <Link class="nav-link active" to="/products">
              Products
            </Link>
            <Link class="nav-link active" to="/pricing">
              Pricing
            </Link>
            <Link class="nav-link active" to="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
