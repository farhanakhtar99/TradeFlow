import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/landing.svg"
          alt="Hero Image"
          className="mb-5 mt-4"
          style={{ width: "85%", marginLeft: "75px" }}
        />
        <h1 className="mt-5 mb-3">Invest in everything</h1>
        <p className="mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "auto" }}
          to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}
