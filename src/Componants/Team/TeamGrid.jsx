import TeamCard from "./TamCard";

function TeamGrid({ members, socialIcons }) {
  return (
    <div className="team-grid">
      {members.map((person, index) => (
        <TeamCard
          key={index}
          image={person.image}
          name={person.name}
          role={person.role}
          description={person.description}
          twitter={socialIcons.twitter}
          linkedin={socialIcons.linkedin}
          github={socialIcons.github}
        />
      ))}
    </div>
  );
}

export default TeamGrid;