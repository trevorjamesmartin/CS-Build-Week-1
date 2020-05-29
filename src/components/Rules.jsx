import React from "react";

const Rules = () => {
  return (
    <div className="life-rules">
      <br />
      <p className="life-rules-label">
        <u>rules of life</u>
      </p>
      <ul>
        <li>
          <i>
            If the cell is alive and has 2 or 3 neighbors, it remains alive.
          </i>
        </li>
        <li>
          <i>
            If the cell is dead and has exactly 3 neighbors, it comes to life.
          </i>
        </li>
      </ul>
      <p className="life-rules-label">
        <u>rules of death</u>
      </p>
      <ul>
        <li>
          <i>over-population occurs with more than 3 neighbors.</i>
        </li>
        <li>
          <i>starvation; with less than 2.</i>
        </li>
      </ul>
    </div>
  );
};

export default Rules;
