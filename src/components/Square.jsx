import React from "react";

/**
 * compute the flat array index
 * of a 2 dimensional structure.
 * @param {Object} o {x: 0, y: 0}
 * @param {Number} w width (the number of objects per row)
 */
export function calculateIndex(o, w) {
  // both x & y should always be less than w
  if (o.y < 0 || o.x < 0) return -1;
  const rowStart = w * o.y;
  const idx = rowStart + o.x;
  // const max = w ** 2;
  return idx < w ** 2 ? idx : -1;
  // return idx <= max ? idx : -1;
}
/**
 * find the neighboring squares of x,y
 * and return a list of flat array indexes
 *
 * @param {Number} w width (the number of objects per row)
 * @param {Number} x horizontal position
 * @param {Number} y vertical position
 */
export function findNeighbors(w, x, y) {
  const north = { x, y: y - 1 };
  const south = { x, y: y + 1 };
  const east = { x: x + 1, y };
  const west = { x: x - 1, y };
  const ne = { x: x + 1, y: y - 1 };
  const nw = { x: x - 1, y: y - 1 };
  const se = { x: x + 1, y: y + 1 };
  const sw = { x: x - 1, y: y + 1 };
  return [north, south, east, west, ne, se, nw, sw]
    .map((o) => calculateIndex(o, w))
    .filter((x) => x > 0);
}

const Square = (props) => {
  const { x, y, z, toggler, key } = props;
  const i = props.squareCount * y + x;
  return (
    <button
      key={key}
      className={z === 0 ? "life-cell-dead" : "life-cell-alive"}
      onClick={() => toggler({ i })}
    />
  );
};

export default Square;
