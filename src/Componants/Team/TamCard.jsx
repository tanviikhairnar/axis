function TeamCard({ member, socials, index, onDelete }) {
  return (
    <div className="team-card text-center h-100 position-relative">
      <button
        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => onDelete(index)}
        aria-label="Delete team member"
      >
        ✕
      </button>

      <div className="team-img-wrapper">
        <img
          src={member.image}
          alt={member.name}
          className="img-fluid team-img"
        />
      </div>

      <div className="team-content pt-4">
        <h5 className="mb-1">{member.name}</h5>
        <small className="text-muted d-block mb-3">{member.role}</small>

        <p className="text-muted small px-3">
          {member.description}
        </p>

        <div className="team-socials">
          <a href="#"><img src={socials.twitter} alt="twitter" /></a>
          <a href="#"><img src={socials.linkedin} alt="linkedin" /></a>
          <a href="#"><img src={socials.github} alt="github" /></a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

