/**
 * CSS vars defined in App.css
 */
const appColors = {
  "--living": "#7983ff",
  "--dead": "#282c34",
  "--app_bkg": "#282c34",
  "--app_color": "white",
  "--cell_border": "slategrey",
  "--switch_on": "#7983ff",
  "--switch_btn": "white",
  "--switch_off": `rgba(0, 0, 0, 0.777)`,
  "--rule_text": "#f6f6f6,",
  "--score_bkg": `rgba(0, 0, 0, 0.777)`,
  "--score_text": "#f6f6f6",
  "--media_btn_bkg": "slategrey",
  "--media_btn_color": "lightblue",
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
  for (key of applicable) {
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

export { appColors, updateColor, applyTheme };
