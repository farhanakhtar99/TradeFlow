import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="container">
      <hr />
      <div className="row p-5">
        <h1 className="text-center p-4">People</h1>
        <div className="col-6 text-center p-2 mb-3">
          <img
            src="media\images\owner.jpg"
            alt="Image"
            style={{
              borderRadius: "90%",
              width: "55%",
              border: "3px solid black",
            }}
          />
          <h4 className="mt-4">Farhan Akhtar</h4>
          <h6 className="text-muted">Founder, Student</h6>
        </div>

        <div
          className="col-6 p-5"
          style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
        >
          <p>
            Farhan bootstrapped and founded TradeFlow in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeFlow has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is hiszen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>
            <a href="" style={{ textDecoration: "none" }}>
              / TradingQnA{" "}
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              / Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
