import { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import useLocalStorage from "../../hooks/localstorage";
import TeamCard from "./TamCard";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "./team.css";

import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin (1).png";
import github from "../../assets/github.png";

// import person1 from "../../assets/f1.webp";
// import bluePerson from "../../assets/blue-f-6.webp";

function Team() {
  const [teamMembers, setTeamMembers] = useLocalStorage("teamMembers", [
    // {
    //   image: person1,
    //   name: "Sarah Johnson",
    //   role: "Chief Executive Officer",
    //   description: "Pellentesque habitant morbi tristique senectus et netus.",
    // },
  ]);

  const [testimonials, setTestimonials] = useLocalStorage("testimonials", [
    // {
    //   image: bluePerson,
    //   name: "Amanda Wilson",
    //   role: "Business Analyst",
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // },
  ]);

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);

  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    description: "",
    image: null,
  });

  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    role: "",
    text: "",
    image: null,
  });

  const handleImageUpload = (e, setForm, form) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      ...form,
      image: URL.createObjectURL(file),
    });
  };

  const addTeamMember = (e) => {
    e.preventDefault();
    setTeamMembers([...teamMembers, teamForm]);
    setTeamForm({ name: "", role: "", description: "", image: null });
    setShowTeamModal(false);
  };

  const addTestimonial = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, testimonialForm]);
    setTestimonialForm({ name: "", role: "", text: "", image: null });
    setShowTestimonialModal(false);
  };

  const deleteTeamMember = (indexToDelete) => {
    if (!window.confirm("Delete this team member?")) return;
    setTeamMembers(
      teamMembers.filter((_, index) => index !== indexToDelete)
    );
  };

  const deleteTestimonial = (indexToDelete) => {
    if (!window.confirm("Delete this testimonial?")) return;
    setTestimonials(
      testimonials.filter((_, index) => index !== indexToDelete)
    );
  };


  return (
    <section id="team" className="py-5">
      <Container fluid>
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-muted">Team</h6>
          <h2 className="fw-light">Meet Our Team</h2>
          <Button className="mt-3 btn-dark" onClick={() => setShowTeamModal(true)}>
            Add Team Member
          </Button>
        </div>

        <Row className="g-4 mb-5">
          {teamMembers.map((member, index) => (
            <Col lg={3} md={6} key={index}>
              <TeamCard
                member={member}
                socials={{ twitter, linkedin, github }}
                onDelete={() => deleteTeamMember(index)}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center mb-4">
          <h6 className="text-uppercase text-muted">Testimonials</h6>
          <h2 className="fw-light">What People Say</h2>
          <Button
            variant="outline-dark"
            className="mt-3"
            onClick={() => setShowTestimonialModal(true)}
          >
            Add Testimonial
          </Button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          centeredSlides
          grabCursor
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                data={item}
                onDelete={() => deleteTestimonial(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Modal show={showTeamModal} onHide={() => setShowTeamModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addTeamMember}>
            <Form.Control
              className="mb-3"
              placeholder="Name"
              required
              onChange={(e) =>
                setTeamForm({ ...teamForm, name: e.target.value })
              }
            />
            <Form.Control
              className="mb-3"
              placeholder="Role"
              required
              onChange={(e) =>
                setTeamForm({ ...teamForm, role: e.target.value })
              }
            />
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-3"
              placeholder="Description"
              required
              onChange={(e) =>
                setTeamForm({ ...teamForm, description: e.target.value })
              }
            />
            <Form.Control
              type="file"
              accept="image/*"
              className="mb-3"
              onChange={(e) => handleImageUpload(e, setTeamForm, teamForm)}
            />
            <Button className="btn-dark w-100" type="submit">
              Add Member
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showTestimonialModal}
        onHide={() => setShowTestimonialModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addTestimonial}>
            <Form.Control
              className="mb-3"
              placeholder="Name"
              required
              onChange={(e) =>
                setTestimonialForm({
                  ...testimonialForm,
                  name: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-3"
              placeholder="Role"
              required
              onChange={(e) =>
                setTestimonialForm({
                  ...testimonialForm,
                  role: e.target.value,
                })
              }
            />
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-3"
              placeholder="Testimonial text"
              required
              onChange={(e) =>
                setTestimonialForm({
                  ...testimonialForm,
                  text: e.target.value,
                })
              }
            />
            <Form.Control
              type="file"
              accept="image/*"
              className="mb-3"
              onChange={(e) =>
                handleImageUpload(e, setTestimonialForm, testimonialForm)
              }
            />
            <Button className="btn-dark w-100" type="submit">
              Add Testimonial
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Team;

