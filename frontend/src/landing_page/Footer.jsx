export default function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-3">
            <img
              src="media/images/logo.png"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="social-icon">
              <span>
                <i class="fa-brands fa-twitter icons"></i>
              </span>
              <span>
                <i class="fa-brands fa-facebook icons"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-instagram icons"></i>
              </span>
              <span>
                <i class="fa-brands fa-linkedin icons"></i>
              </span>
              <span>
                <i class="fa-brands fa-telegram icons"></i>
              </span>
            </div>
          </div>
          <div className="col-3">
            <p className="fs-5">Company</p>
            <p>
              <a href="" className="footer-link">
                Product
              </a>
            </p>

            <p>
              <a href="" className="footer-link">
                Pricing
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Referral Programme
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Careers
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                About
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Zerodha.tech
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Press & media
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Zerodha cares (CSR)
              </a>
            </p>
          </div>
          <div className="col-3">
            <p className="fs-5">Support</p>
            <p>
              <a href="" className="footer-link">
                Contact
              </a>
            </p>

            <p>
              <a href="" className="footer-link">
                Support Portal
              </a>
            </p>

            <p>
              <a href="" className="footer-link">
                Z-Connect blog
              </a>
            </p>

            <p>
              <a href="" className="footer-link">
                List of Charges
              </a>
            </p>

            <p>
              <a href="" className="footer-link">
                Downloads and resources
              </a>
            </p>
          </div>
          <div className="col-3">
            <p className="fs-5">Account</p>
            <p>
              <a href="" className="footer-link">
                Fund transfer
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                Open an account
              </a>
            </p>
            <p>
              <a href="" className="footer-link">
                60 day challenge
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal
            Mechanism{" "}
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="text-center" style={{ marginBottom: "10px" }}>
          <a href="" className="end-link">
            NSE
          </a>
          <a href="" className="end-link">
            BSE
          </a>
          <a href="" className="end-link">
            MCX
          </a>
          <a href="" className="end-link">
            Terms & conditions
          </a>
          <a href="" className="end-link">
            Policies & procedures
          </a>
          <a href="" className="end-link">
            Privacy policy
          </a>
          <a href="" className="end-link">
            Disclosure
          </a>
        </div>
      </div>
    </footer>
  );
}
