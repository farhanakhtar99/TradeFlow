export default function Hero() {
  return (
    <div className="container p-3">
      <div className="row text-center mt-5 mb-5">
        <h1 className="mt-2 mb-3 fs-3">Charges</h1>
        <h5 className="text-muted">List of all charges and taxes</h5>
      </div>
      <div className="row text-center p-3 border-top">
        <div className="col-4 p-5">
          <img src="media\images\pricingMF.svg" className="p-5" />
          <h3 className="mb-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\intradayTrades.svg" className="p-5" />
          <h3 className="mb-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\pricingMF.svg" className="p-5" />
          <h3 className="mb-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
