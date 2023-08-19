import React, { useState } from "react";

export default function FAQ({ id, title, description }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="card-item">
      <div className="card-heading">
        <h3>{title}</h3>
        <span>
          <i
            onClick={handleClick}
            className={`icon fas ${
              toggle ? "fa-eye" : "fa-eye-slash"
            } eye-icon`}
          ></i>
        </span>
      </div>

      <p>{toggle && <p>{description}</p>}</p>
    </div>
  );
}
