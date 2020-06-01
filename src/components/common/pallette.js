/**
 * CSS vars defined in App.css
 */
const appColors = {
  "--living": "#7983ff", // c
  "--dead": "#282c34", // a
  "--app_bkg": "#282c34", // a
  "--app_color": "white", // b
  "--cell_border": "slategrey",
  "--switch_on": "#7983ff", // c
  "--switch_btn": "white", // b
  "--switch_off": `rgba(0, 0, 0, 0.777)`, // a
  "--rule_text": "#f6f6f6,", // c
  "--score_bkg": `rgba(0, 0, 0, 0.777)`, // a
  "--score_text": "#f6f6f6", // c
  "--media_btn_bkg": "slategrey", // d
  "--media_btn_color": "lightblue", // a
};

function genTheme(abcd) {
  const { a, b, c, d } = abcd;
  return {
    "--living": c,
    "--dead": a,
    "--app_bkg": a,
    "--app_color": b,
    "--cell_border": d,
    "--switch_on": c,
    "--switch_btn": b,
    "--switch_off": a,
    "--rule_text": c,
    "--score_bkg": a,
    "--score_text": c,
    "--media_btn_bkg": d,
    "--media_btn_color": a,
  };
}

const test_colors = {
  a: "#120136", // switch_off, score_bkg, dead
  b: "#035aa6", // app_color switch_btn
  c: "#40bad5", // rule_text, score_text, living
  d: "#fcbf1e", // media_btn_colora
};

/**
 * Update a single CSS variable
 * @param {string} key "--key_name"
 * @param {string} val "#colorValue"
 * @param {string} selector ":root"
 */
function updateColor(key, val, selector) {
  // only change designated css vars.
  if (!appColors[key]) return false;
  // select variable container element.
  const qs = selector ? selector : ":root";
  const element = document.querySelector(qs);
  try {
    // ok; change the color
    element.style.setProperty(key, val);
    return true;
  } catch {
    // error; reset the color
    element.style.setProperty(key, !appColors[key]);
    return false;
  }
}
/**
 * Update more than one CSS variable.
 * @param {Object} themeColors {"--app_bkg": "#colorCode",...}
 * @param {string} selector ":root"
 */
function applyTheme(themeColors, selector) {
  // filter only designated css vars.
  const available = Object.keys(appColors);
  const applicable = Object.keys(themeColors).filter(
    (k) => available.indexOf(k) > -1
  );
  if (applicable.length === 0) {
    return false;
  }
  const qs = selector ? selector : ":root";
  const element = document.querySelector(qs);
  for (let key of applicable) {
    const val = themeColors[key];
    try {
      // ok; change the color
      element.style.setProperty(key, val);
    } catch {
      // error; reset the color
      element.style.setProperty(key, !appColors[key]);
    }
  }
}

export { appColors, updateColor, applyTheme, genTheme, test_colors };
