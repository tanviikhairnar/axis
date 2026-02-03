import { Card, Button } from "react-bootstrap";

function TeamCard({ member, socials, onDelete }) {
  return (
    <Card className="h-100 text-center">
      {member.image && (
        <Card.Img
          variant="top"
          src={member.image}
          style={{ height: "250px", objectFit: "cover" }}
        />
      )}

      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {member.role}
        </Card.Subtitle>
        <Card.Text>{member.description}</Card.Text>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <img src={socials.twitter} width={20} />
          <img src={socials.linkedin} width={20} />
          <img src={socials.github} width={20} />
        </div>

        <Button variant="danger" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;


