function TestimonialCard({ data, index, onDelete }) {
  return (
    <div className="testimonial-card position-relative">
      <button
        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => onDelete(index)}
        aria-label="Delete testimonial"
      >
        ✕
      </button>

      <div className="testimonial-avatar">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="testimonial-stars">★★★★★</div>

      <p className="testimonial-text">
        “ {data.text} ”
      </p>

      <h6 className="mb-0">{data.name}</h6>
      <small className="text-muted">{data.role}</small>

      <div className="testimonial-quote">❝</div>
    </div>
  );
}

export default TestimonialCard;

