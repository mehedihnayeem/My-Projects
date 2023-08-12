import React from "react";

export default function CalculateGPA({ numArr, averageButton }) {
  const newArr = numArr.map((val) => {
    return Number(val);
  });

  const anyLessThan33 = newArr.some((item) => {
    return item < 33;
  });

  const sum = newArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const averageNumber = sum / newArr.length;

  const calGPA = () => {
    if (averageNumber < 33 || anyLessThan33) {
      return "F";
    } else if (averageNumber >= 33 && averageNumber <= 39) {
      return "D";
    } else if (averageNumber >= 40 && averageNumber <= 49) {
      return "C";
    } else if (averageNumber >= 40 && averageNumber <= 59) {
      return "B";
    } else if (averageNumber >= 40 && averageNumber <= 69) {
      return "A-";
    } else if (averageNumber >= 40 && averageNumber <= 79) {
      return "A";
    } else if (averageNumber >= 80 && averageNumber <= 100) {
      return "A+";
    }
  };

  const showGPA = () => {
    if (averageNumber) {
      return <span>You've earned a GPA of {calGPA()} </span>;
    }
  };

  const showAverage = () => {
    if (averageButton && averageNumber) {
      return (
        <span>and the average mark for your courses is {averageNumber}</span>
      );
    }
  };

  const showResult = (
    <div>
      <p className="show-result">
        {showGPA()} {showAverage()}
      </p>
    </div>
  );

  return <ul>{showResult}</ul>;
}
