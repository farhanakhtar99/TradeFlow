import UniLogo from "./UniLogo";
import { Link } from "react-router-dom";

export default function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h3 className="mt-4">The Zerodha Universe</h3>
        <p className="text-small text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row p-5">
          <div className="col-4 mt-3">
            <UniLogo
              imageLink="media\images\zerodhaFundhouse.png"
              imageDescription="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
            />
          </div>
          <div className="col-4 mt-4">
            <UniLogo
              imageLink="media\images\sensibullLogo.svg"
              imageDescription="Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more."
            />
          </div>
          <div className="col-4 mt-4">
            <UniLogo
              imageLink="media\images\tijori.svg"
              imageDescription="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
            />
          </div>
          <div className="col-4 mt-5">
            <UniLogo
              imageLink="media\images\streakLogo.png"
              imageDescription="Systematic trading platform that allows you to create and backtest strategies without coding."
            />
          </div>
          <div className="col-4 mt-5">
            <UniLogo
              imageLink="media\images\smallcaseLogo.png"
              imageDescription="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
            />
          </div>
          <div className="col-4 mt-5">
            <UniLogo
              imageLink="media\images\dittoLogo.png"
              imageDescription="Personalized advice on life and health insurance. No spam and no mis-selling."
            />
          </div>
        </div>
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "auto" }}
          to="/signup"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}
