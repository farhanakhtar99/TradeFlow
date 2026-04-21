export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4" id="supportWraper">
        <h4 className="mt-4 fx-6">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 mx-5">
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h3 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            className="mb-3"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />
          <br />
          <a href="">Track account opening</a> &nbsp;&nbsp;
          <a href="">Track segment activation</a> &nbsp;&nbsp;
          <a href="">Intraday</a> &nbsp;
          <a href="" style={{ marginLeft: "-4px" }}>
            margins
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-5">
          <h3 className="fs-4 mb-4">Featured</h3>
          <ol>
            <li className="mb-3">
              <a href="">Current Takeovers and Delisting- January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        <div className="col-1"></div>
      </div>
    </section>
  );
}
