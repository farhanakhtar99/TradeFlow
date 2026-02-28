export default function Brokeraje() {
  return (
    <div className="container mt-3">
      <div className="row p-4 border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h1 className="fs-4 text-center mb-5">Brokeraje calculator</h1>
          </a>
          <ul className="mb-5">
            <li className="mt-3">
              Call & Trade and RMS auto-squareoff: Additional charges of
              &#8377;%0 + GST per order.
            </li>
            <li className="mt-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mt-3">
              Physical copies of contract notes, if required, shall be charged
              &#8377;@0 per contract note. Courier charges apply.
            </li>
            <li className="mt-3">
              For NRI account(non-PIS), 0.5% or &#8377;100 per executed order
              for equity (whichever is lower).
            </li>
            <li className="mt-3">
              For NRI account (PIS), 0.5% or &#8377;200 per executed order for
              equity (whicever is lower).
            </li>
            <li className="mt-3">
              If the account is in debit balance, any order placed will be
              charged &#8377;40 per executed order instead of &#8377;20 per
              executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h1 className="fs-4 text-center" style={{ color: "#0388fc" }}>
              List of charges
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
