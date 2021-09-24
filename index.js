const fs = require("fs/promises"); // node's built-in package
const jss = require("jss").default; // seems to be a problem with JSS' API
const preset = require("jss-preset-default").default; // seems to be a problem with JSS' API
const styles = require("./src/styles");

jss.setup(preset());

const stylesheet = jss.createStyleSheet(styles, {
  generateId: (rule) => `${rule.key}`,
});

fs.writeFile("highlight.css", stylesheet.toString())
  .then(() => console.log("CSS file saved!"))
  .catch((e) => console.log(e));
