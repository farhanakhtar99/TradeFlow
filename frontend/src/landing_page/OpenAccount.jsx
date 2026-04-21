import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a TradeFlow account</h1>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          className="p-2 btn btn-primary fs-5 mb-3"
          style={{ width: "20%", margin: "auto" }}
          to="/signup"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}
