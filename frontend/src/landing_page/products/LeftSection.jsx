export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-3 ">
        <div className="col-6 p-5">
          <img src={imageURL} alt="Image" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h2 className="mb-4">{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "60px" }}
            >
              Learn mores <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
