export default function Pricing() {
    return(
        <div className="container mt-5 p-4">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency 
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{textDecoration: "none"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div> 
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center"  style={{height:"180px"}} >
                        <div className="col-6 border">
                            <h1 className="mt-4 mb-4">₹0</h1>
                            <p>Free equity delivery and <br /> direct mutual fund</p>
                        </div>
                        <div className="col-6 border">
                            <h1 className="mt-4 mb-4">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}