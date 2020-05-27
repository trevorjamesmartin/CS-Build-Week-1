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

/**
 * survival
 *
 * If the cell is alive and has 2 or 3 neighbors,
 * then it remains alive. Else it dies.
 */

/**
 * birth
 *
 * If the cell is dead and has exactly 3 neighbors,
 * then it comes to life. Else if remains dead.
 */

/**
 * Else ?
 *   over-population: occurs with more than 3 neighbors.
 *   starvation: occurs with less than 2 neighbors.
 */

export { isLeftEdge, isRightEdge, squareCount };
