import React, { useState } from "react";
import CalculateGPA from "./CalculateGPA";

export default function Form() {
  const [data, setData] = useState({
    averageBtn: false,
    additonalSubject: "",
    group: "",
    genOne: "",
    genTwo: "",
    genThree: "",
    genFour: "",
    genFive: "",
    genSix: "",
    genSeven: "",
    groupSubOne: "",
    groupSubTwo: "",
    additionSub: "",
    additionSubOne: "",
    additionSubOne: "",
    additionSubNum: "",
    arr: [],
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
    setData((prevData) => ({
      ...prevData,
      arr: [
        genOne.value,
        genTwo.value,
        genThree.value,
        genFour.value,
        genFive.value,
        genSix.value,
        genSeven.value,
        groupSubOne.value,
        groupSubTwo.value,
        additionSubNum.value,
      ],
    }));
  };

  let gropSubject;

  if (data.group === "science") {
    gropSubject = (
      <>
        <div>
          <label htmlFor="groupSubOne">Physics </label>
          <input
            type="number"
            name="groupSubOne"
            id="groupSubOne"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubOne}
            required
          />
        </div>
        <div>
          <label htmlFor="groupSubTwo">Chemistry </label>
          <input
            type="number"
            name="groupSubTwo"
            id="groupSubTwo"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubTwo}
            required
          />
        </div>
      </>
    );
  } else if (data.group === "arts") {
    gropSubject = (
      <>
        <div>
          <label htmlFor="groupSubOne">Economics </label>
          <input
            type="number"
            name="groupSubOne"
            id="groupSubOne"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubOne}
            required
          />
        </div>
        <div>
          <label htmlFor="groupSubTwo">Geography </label>
          <input
            type="number"
            name="groupSubTwo"
            id="groupSubTwo"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubTwo}
            required
          />
        </div>
      </>
    );
  } else if (data.group === "commerce") {
    gropSubject = (
      <>
        <div>
          <label htmlFor="groupSubOne">Finance & Banking </label>
          <input
            type="number"
            name="groupSubOne"
            id="groupSubOne"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubOne}
            required
          />
        </div>
        <div>
          <label htmlFor="groupSubTwo">Accounting </label>
          <input
            type="number"
            name="groupSubTwo"
            id="groupSubTwo"
            min={0}
            max={100}
            onChange={handleChange}
            value={data.groupSubTwo}
            required
          />
        </div>
      </>
    );
  }

  let additionalSubject;

  if (data.group === "science") {
    additionalSubject = (
      <>
        <div className="addition-sub">
          <fieldset>
            <legend>Additional Subject</legend>
            <input
              type="radio"
              name="additionSub"
              id="additionSubOne"
              value="additionSubOne"
              checked={data.additionSub === "additionSubOne"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubOne">Biology</label>
            {data.additionSub === "additionSubOne" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
                required
              />
            ) : null}
            <br />

            <input
              type="radio"
              name="additionSub"
              id="additionSubTwo"
              value="additionSubTwo"
              checked={data.additionSub === "additionSubTwo"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubTwo">Higher Math</label>
            {data.additionSub === "additionSubTwo" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
                required
              />
            ) : null}
          </fieldset>
        </div>
      </>
    );
  } else if (data.group === "arts") {
    additionalSubject = (
      <>
        <div className="addition-sub">
          <fieldset>
            <legend>Additional Subject</legend>
            <input
              type="radio"
              name="additionSub"
              id="additionSubOne"
              value="additionSubOne"
              checked={data.additionSub === "additionSubOne"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubOne">Civic & Citizenship</label>
            {data.additionSub === "additionSubOne" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
                required
              />
            ) : null}
            <br />

            <input
              type="radio"
              name="additionSub"
              id="additionSubTwo"
              value="additionSubTwo"
              checked={data.additionSub === "additionSubTwo"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubTwo">General Science</label>
            {data.additionSub === "additionSubTwo" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
                required
              />
            ) : null}
          </fieldset>
        </div>
      </>
    );
  } else if (data.group === "commerce") {
    additionalSubject = (
      <>
        <div className="addition-sub">
          <fieldset>
            <legend>Additional Subject</legend>
            <input
              type="radio"
              name="additionSub"
              id="additionSubOne"
              value="additionSubOne"
              checked={data.additionSub === "additionSubOne"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubOne">Business Ent.</label>
            {data.additionSub === "additionSubOne" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
              />
            ) : null}
            <br />

            <input
              type="radio"
              name="additionSub"
              id="additionSubTwo"
              value="additionSubTwo"
              checked={data.additionSub === "additionSubTwo"}
              onChange={handleChange}
              required
            />
            <label htmlFor="additionSubTwo">General Science</label>
            {data.additionSub === "additionSubTwo" ? (
              <input
                type="number"
                name="additionSubNum"
                id="additionSubNum"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.additionSubNum}
                required
              />
            ) : null}
          </fieldset>
        </div>
      </>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <div className="group-select">
            <label htmlFor="group">Select Group</label>
            <br />
            <select
              id="group"
              value={data.group}
              onChange={handleChange}
              name="group"
              required
            >
              <option value="">-- Choose --</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>

          <div className="subjects">
            <div>
              <label htmlFor="genOne">Bangla </label>
              <input
                type="number"
                name="genOne"
                id="genOne"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genOne}
                required
              />
            </div>
            <div>
              <label htmlFor="genTwo">English </label>
              <input
                type="number"
                name="genTwo"
                id="genTwo"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genTwo}
                required
              />
            </div>
            <div>
              <label htmlFor="genThree">Mathematics </label>
              <input
                type="number"
                name="genThree"
                id="genThree"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genThree}
                required
              />
            </div>
            <div>
              <label htmlFor="genFour">Religion </label>
              <input
                type="number"
                name="genFour"
                id="genFour"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genFour}
                required
              />
            </div>
            <div>
              <label htmlFor="genFive">Info. & Commu. Technology </label>
              <input
                type="number"
                name="genFive"
                id="genFive"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genFive}
                required
              />
            </div>
            <div>
              <label htmlFor="genSix">Physical Studies </label>
              <input
                type="number"
                name="genSix"
                id="genSix"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genSix}
                required
              />
            </div>
            <div>
              <label htmlFor="genSeven">Career Eduaction </label>
              <input
                type="number"
                name="genSeven"
                id="genSeven"
                min={0}
                max={100}
                onChange={handleChange}
                value={data.genSeven}
                required
              />
            </div>
            {gropSubject}
          </div>

          {additionalSubject}

          <div className="average">
            <input
              type="checkbox"
              name="averageBtn"
              id="averageBtn"
              onChange={handleChange}
              checked={data.averageBtn}
            />
            <label htmlFor="averageBtn">Also Calculate Average</label>
          </div>

          <button className="btn">Calculate Grade</button>
        </div>
      </form>
      <CalculateGPA numArr={data.arr} averageButton={data.averageBtn} />
    </div>
  );
}
