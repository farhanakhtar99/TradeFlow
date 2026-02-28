export default function Stats() {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+{" "}
            <br />
            lakh crores worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks spam, "gamification", or annoying push <br />
            notifictions. High quality apps that you use at your space the{" "}
            <br />
            way you like.
          </p>
          <h2 className="fs-4">The TradeFlow universe</h2>
          <p className="text-muted">
            Not just app, but a whole ecosystem. Our investments in <br />
            30+ fintech startups offfer you tailored services specific to <br />
            your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            with initiatives like Nudge and Kill Switch, we don't just <br />
            facilate transactions, but actively help you do better with
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media\images\ecosystem.png"
            alt="Ecosystem Image"
            style={{ width: "90%" }}
          />{" "}
          <br />
          <div className="text-center">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }} className="offset-2">
              Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
