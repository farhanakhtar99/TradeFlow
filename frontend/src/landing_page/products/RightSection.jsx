export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-4">
      <div className="row p-3 ">
        <div className="col-5 p-5 mt-5">
          <h2 className="mb-4">{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5">
          <img src={imageURL} alt="Image" />
        </div>
      </div>
    </div>
  );
}
