import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="form-main-div">
      <div className="form-text">
        <div className="support-buttons">
          <div className="btn-group-1">
            <button className="btn btn-1">
              <span className="material-symbols-outlined icon">chat</span>
              <p className="btn-p"> VIA SUPPORT CHAT</p>
            </button>
            <button className="btn btn-1">
              <span className="material-symbols-outlined">call</span>
              <p> VIA CALL</p>
            </button>
          </div>
          <div>
            <button className="btn btn-2">
              <span className="material-symbols-outlined">email</span>
              <span> VIA EMAIL FORM</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => {
                setData((prevData) => ({ ...prevData, name: e.target.value }));
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => {
                setData((prevData) => ({ ...prevData, email: e.target.value }));
              }}
            />
          </div>
          <div>
            <label htmlFor="text">Text: </label>
            <input
              type="text"
              id="text"
              value={data.text}
              onChange={(e) => {
                setData((prevData) => ({ ...prevData, text: e.target.value }));
              }}
            />
          </div>
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="form-img">
        <img src="src/assets/images/Service 24_7-pana 1.jpg" alt="image-24/7" />
      </div>
    </div>
  );
}

export default Form;
