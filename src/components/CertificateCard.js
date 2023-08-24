import React from "react";
import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, description, imgUrl, viewDemoLink, liveDemoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="btn-container"><br/>
            <a href={viewDemoLink} className="btn">View PDF</a> 
          </div>
        </div>
      </div>
    </Col>
  )
}
