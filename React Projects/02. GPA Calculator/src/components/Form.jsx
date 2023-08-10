import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    subjectOne: "",
    subjectTwo: "",
    averageQ: false,
    additonalSubject: "",
    group: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  let gropSubject;

  if (data.group === "science") {
    gropSubject = (
      <div>
        <div>
          <label htmlFor="subjectOne">Physics: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
        <div>
          <label htmlFor="subjectOne">Chemistry: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
      </div>
    );
  } else if (data.group === "arts") {
    gropSubject = (
      <div>
        <div>
          <label htmlFor="subjectOne">Economics: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
        <div>
          <label htmlFor="subjectOne">Geography: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
      </div>
    );
  } else if (data.group === "commerce") {
    gropSubject = (
      <div>
        <div>
          <label htmlFor="subjectOne">Finance & Banking: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
        <div>
          <label htmlFor="subjectOne">Accounting: </label>
          <input
            type="number"
            name="subjectOne"
            id="subjectOne"
            onChange={handleChange}
            value={data.subjectOne}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <div>
            <label htmlFor="group">Select Group</label>
            <br />
            <select
              id="group"
              value={data.group}
              onChange={handleChange}
              name="group"
            >
              <option value="">-- Choose --</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>
          <div className="subjects">
            <div>
              <label htmlFor="subjectOne">Bangla: </label>
              <input
                type="number"
                name="subjectOne"
                id="subjectOne"
                onChange={handleChange}
                value={data.subjectOne}
              />
            </div>
            <div>
              <label htmlFor="subjectTwo">English: </label>
              <input
                type="number"
                name="subjectTwo"
                id="subjectTwo"
                onChange={handleChange}
                value={data.subjectTwo}
              />
            </div>
            <div>
              <label htmlFor="subjectThree">Mathematics: </label>
              <input
                type="number"
                name="subjectThree"
                id="subjectThree"
                onChange={handleChange}
                value={data.subjectThree}
              />
            </div>
            <div>
              <label htmlFor="subjectFour">Religion: </label>
              <input
                type="number"
                name="subjectFour"
                id="subjectFour"
                onChange={handleChange}
                value={data.subjectFour}
              />
            </div>
            <div>
              <label htmlFor="subjectFive">Info. & Commu. Technology: </label>
              <input
                type="number"
                name="subjectFive"
                id="subjectFive"
                onChange={handleChange}
                value={data.subjectFive}
              />
            </div>
            <div>
              <label htmlFor="subjectSix">Physical Studies </label>
              <input
                type="number"
                name="subjectSix"
                id="subjectSix"
                onChange={handleChange}
                value={data.subjectSix}
              />
            </div>
            {gropSubject}
          </div>

          <div>
            <fieldset>
              <legend>Additional Subject</legend>
              <input
                type="radio"
                name="additonalSubject"
                id="additonalSubject"
                value="biology"
                checked={data.additonalSubject == "biology"}
                onChange={handleChange}
              />
              <label htmlFor="additonalSubject">Biology</label>
              <br />

              <input
                type="radio"
                name="additonalSubject"
                id="additonalSubject"
                value="h-math"
                checked={data.additonalSubject == "h-math"}
                onChange={handleChange}
              />
              <label htmlFor="additonalSubject">Higher Math</label>
            </fieldset>
          </div>
          <div>
            <input
              type="checkbox"
              name="averageQ"
              id="averageQ"
              onChange={handleChange}
              checked={data.averageQ}
            />
            <label htmlFor="averageQ">English</label>
          </div>

          <button>Calculate Grade</button>
        </div>
      </form>
    </div>
  );
}
