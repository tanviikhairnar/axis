import TestimonialCard from "./TestimonialCard";

function TestimonialGrid({ testimonials }) {
  return (
    <div className="testimonials">
      <div className="testimonials-wrapper">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            img={item.img}
            name={item.name}
            role={item.role}
            text={item.text}
            active={index === 1}
          />
        ))}
      </div>

      <div className="testimonial-nav">
        <button className="nav-btn">‹</button>
        <button className="nav-btn">›</button>
      </div>
    </div>
  );
}

export default TestimonialGrid;