import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSending(true);
      const templateParams = {
        from_firstname: formData.firstName,
        from_lastname: formData.lastName,
        from_email: formData.email,
        message: formData.message,
        phone: formData.phone,
      };

      await emailjs.send(
        "service_6nbljki",
        "template_c0us0hg",
        templateParams,
        "_w3rOYNANmZMDGAYs"
      );

      setIsMessageSent(true);
      setIsSending(false);

      // Reset form data and clear fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phone: "",
      });

      // Reset the "Send" button text to "Send" after a delay
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000); // Adjust the delay time as needed
    } catch (error) {
      console.error("Error sending email:", error);
      setIsMessageSent(false);
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="contact-center">
                    <h2>Get In Touch</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formData.firstName} name="firstName" placeholder="First Name" onChange={handleInputChange}/>
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formData.lastName} name="lastName" placeholder="Last Name" onChange={handleInputChange}/>
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="email" value={formData.email} name="email" placeholder="Email Address" onChange={handleInputChange} />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" value={formData.phone} name="phone" placeholder="Phone No." onChange={handleInputChange}/>
                      </Col>
                      <Col className="px-1">
                        <textarea rows="6" value={formData.message} name="message" placeholder="Message" onChange={handleInputChange}></textarea>
                        <button type="submit" className={isMessageSent ? "sent" : ""} disabled={isSending}>
                          <span>{isMessageSent ? "Sent" : isSending ? "Sending..." : "Send"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                  {isMessageSent && <p className="confirmation">Message sent successfully!</p>}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
