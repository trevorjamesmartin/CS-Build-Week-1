/**
 * get the client ViewPort
 * @returns {Object} {`w`: width `h`: height}
 */
function getViewPort() {
  // total cell count is (sq_root ** 2);
  return window.innerWidth
    ? { w: window.innerWidth, h: window.innerHeight }
    : {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
}
/**
 * set CSS vars
 * @param {Number} n number per row
 */
function scaleBoard(n) {
  const { w, h } = getViewPort();
  const board = w;
  const cell = board / n;
  const elem = document.querySelector(":root");
  elem.style.setProperty("--board_width", `${board}px`);
  elem.style.setProperty("--cell_width", `${cell}px`);
}

export { scaleBoard };
