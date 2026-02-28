export default function UniLogo({ imageLink, imageDescription }) {
  return (
    <div>
      <img src={imageLink} style={{ width: "50%" }} className="mb-3" />
      <p
        className="text-center text-muted"
        style={{ fontSize: "12px", width: "95%", fontWeight: "600" }}
      >
        {imageDescription}
      </p>
    </div>
  );
}
