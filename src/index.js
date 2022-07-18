const fs = require("fs/promises"); // node's built-in package
const path = require("path");
// seems to be a problem with JSS' API
// track -> https://github.com/cssinjs/jss/issues/1569
const jss = require("jss").default;
const preset = require("jss-preset-default").default;
const styles = require("./styles");

jss.setup(preset());

const stylesheet = jss.createStyleSheet(styles, {
  generateId: (rule) => `${rule.key}`,
});

fs.writeFile(path.resolve(__dirname, "../dist/gh-dark-style.css"), stylesheet.toString())
  .then(() => console.log("CSS build succeeded!"))
  .catch((e) => console.log(e));
