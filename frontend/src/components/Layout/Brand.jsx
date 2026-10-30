import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Brand = ({ variant = "" }) => (
  <span className={`brand-wordmark ${variant ? `brand-wordmark--${variant}` : ""}`}>
    <span className="brand-symbol">
      <FaBriefcase aria-hidden="true" />
    </span>
    <span>HireNest</span>
  </span>
);

export default Brand;
