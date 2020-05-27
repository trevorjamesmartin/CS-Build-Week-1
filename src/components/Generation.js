// todo, generate next board
const squareCount = 25;

/**
 * returns true if square is on left-most edge
 * @param {Number} i index
 * @param {Number} squareCount squares per row
 */
function isLeftEdge(i, squareCount) {
  return (squareCount % i === 0) | (squareCount === 0);
}
/**
 * returns true if square is on right-most edge
 * @param {*} i index
 * @param {*} squareCount squares per row
 */
function isRightEdge(i, squareCount) {
  return (squareCount % (i + 1) === 0) | (squareCount === i);
}

export { isLeftEdge, isRightEdge, squareCount };
