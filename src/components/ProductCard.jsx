// Inside ProductCard component
const ProductCard = ({ product, nameKey = "title" }) => {
  // … existing code …

  const [isFav, setIsFav] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsFav(prev => !prev);
    // Optionally: persist favourite status
  };

  return (
    <Card className="shadow-sm border-0 p-4 rounded-4 text-center product-card" style={{ position: "relative" }}>
      {discount && (
        <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">
          -{discount}%
        </span>
      )}
      {/* New short-div overlay for heart icon */}
      <div
        className="short-overlay position-absolute top-0 end-0 m-2 d-flex align-items-center justify-center"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: isFav ? "rgba(255,0,0,0.1)" : "rgba(0,0,0,0.05)",
          cursor: "pointer",
          zIndex: 10
        }}
        onClick={handleHeartClick}
        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        role="button"
      >
        <Heart size={20} color={isFav ? "red" : "#ccc"} fill={isFav ? "red" : "none"} />
      </div>

      <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "150px" }}>
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ width: "180px", height: "180px", objectFit: "cover", backgroundColor: "rgb(246, 241, 241)" }}
        />
      </div>
      <Card.Body>
        {/* … rest of card body same as before … */}
      </Card.Body>
    </Card>
  );
};
