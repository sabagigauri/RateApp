import React, { useState } from "react";
import "./Rate.css";

const Rate = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };


  return (
    <>
      <div className="rating-styles">
        <div className="rate-nums">
          {[1, 2, 3, 4, 5].map((value) => (
            <span key={value} onClick={() => handleRatingChange(value)}>
              {value}
            </span>
          ))}
        </div>
        <button className="submit-button" onClick={() => onSubmit(rating)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Rate;
