/**
 * survival
 *
 * If the cell is alive and has 2 or 3 neighbors,
 * then it remains alive. Else it dies.
 *
 * birth
 *
 * If the cell is dead and has exactly 3 neighbors,
 * then it comes to life. Else if remains dead.
 *
 * Else ?
 *   over-population: occurs with more than 3 neighbors.
 *   starvation: occurs with less than 2 neighbors.
 */
const squareCount = 25;
const [LIVING, DEAD] = [1, 0];

function firstGen() {
  const squares = [];
  for (let i = 0; i < squareCount; i++) {
    for (let j = 0; j < squareCount; j++) {
      const idx = getIndex(squareCount, j, i);
      const neighbors = getNeighbors(idx, squareCount);
      // console.log(neighbors);
      squares.push({ x: j, y: i, z: 0, neighbors });
    }
  }
  return squares;
}
/**
 * returns true if square is on southern edge
 * @param {Number} i index
 * @param {Number} squareCount squares per row
 */
function isSouthEdge(i, squareCount) {
  // 600 - 625
  const lastSquare = squareCount ** 2;
  const lastRowStart = lastSquare - squareCount;
  const epsilon = lastRowStart - 1;
  return lastSquare > i && i >= epsilon;
}
/**
 * returns true if square is on northern edge
 * @param {Number} i index
 * @param {Number} squareCount squares per row
 */
function isNorthEdge(i, squareCount) {
  // 0 - 25
  return i < squareCount && i > -1;
}
/**
 * returns true if square is on western edge
 * @param {Number} i index
 * @param {Number} squareCount squares per row
 */
function isWestEdge(i, squareCount) {
  return i % squareCount === 0;
}
/**
 * returns true if square is on eastern edge
 * @param {*} i index
 * @param {*} squareCount squares per row
 */
function isEastEdge(i, squareCount) {
  return ((i + 1) % squareCount === 0) | (squareCount === i);
}

/**
 * return the index of (x, y)
 * where max items per row is (w)
 * @param {Number} w
 * @param {Number} x
 * @param {Number} y
 */
function getIndex(w, x, y) {
  return w * y + x;
}

function edgeNeighbors(i, squareCount) {
  const last = squareCount ** 2 - squareCount; // last n squares; n === squareCount
  const north = isNorthEdge(i, squareCount) ? last + i : i - squareCount;
  const south = isSouthEdge(i, squareCount) ? i - last : i + squareCount;
  const east = isEastEdge(i, squareCount) ? i + 1 - squareCount : i + 1;
  const west = isWestEdge(i, squareCount) ? i - 1 + squareCount : i - 1;
  return { north, south, east, west };
}
function zeroCase(squareCount) {
  const ls = squareCount ** 2;
  const north = ls - squareCount;
  const ne = north + 1;
  const east = 1;
  const south = squareCount;
  const se = south + 1;

  const west = squareCount - 1;
  const nw = squareCount + north - 1;
  const sw = squareCount * 2 - 1;
  return [north, south, east, west, ne, nw, se, sw];
}

/**
 * dead or alive, return the neighbors of `i`
 *
 * runs once at start
 * @param {Number} i index number
 * @param {Number} squareCount max-squares per row
 */
function getNeighbors(i, squareCount) {
  if (i === 0) {
    return zeroCase(squareCount);
  }
  const { north, south, east, west } = edgeNeighbors(i, squareCount);
  const northEast = isEastEdge(north, squareCount)
    ? north + 1 - squareCount
    : north + 1;
  const northWest = isWestEdge(north, squareCount)
    ? north - 1 + squareCount
    : north - 1;
  const southEast = isEastEdge(south, squareCount)
    ? south + 1 - squareCount
    : south + 1;
  const southWest = isWestEdge(south, squareCount)
    ? south - 1 + squareCount
    : south - 1;
  return [north, south, east, west, northEast, northWest, southEast, southWest];
}

/**
 * how many living neighbors
 * to `i` within `squares`
 * @param {Number} i index number of cell
 * @param {Array} squares array of cells
 */
function livingNeighborsByIndex(i, squares) {
  return squares[i].neighbors.map((n) => squares[n].z).reduce((a, b) => b + a);
}

/**
 * return the score of each square in this generation,
 * where score is determined by the number of living neighbors.
 * @param {Array} squares
 */
function lifeCount(squares) {
  return squares.map((sq, idx) => sq.z && livingNeighborsByIndex(idx, squares));
}

/**
 * apply the rules to this generation and return the result.
 * @param {Array} squares array of life-cells
 */
function nextGen(squares) {
  const lc = lifeCount(squares);
  // const nextGen = [];
  return squares.map((sq, idx) =>
    sq.z
      ? { ...sq, z: lc[idx] === 3 ? LIVING : lc[idx] === 2 ? sq.z : DEAD }
      : sq
  );
}

export {
  getNeighbors,
  squareCount,
  getIndex,
  livingNeighborsByIndex,
  lifeCount,
  firstGen,
  nextGen,
};