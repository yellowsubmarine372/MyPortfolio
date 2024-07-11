import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="text-black text-xl font-poppins font-semibold">
        함께 작업하고 싶다면?
        <br className="sm:block hidden" /> 언제든지 연락 주세요!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
