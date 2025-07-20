import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
};

export default Heading;
