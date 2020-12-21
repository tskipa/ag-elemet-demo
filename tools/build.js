const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/web-component/runtime.js",
    "./dist/web-component/polyfills.js",
    "./dist/web-component/main.js",
  ];
  await fs.ensureDir("public");
  await concat(files, "public/web-component.js");
  await fs.copy("./dist/web-component/styles.css", "public/styles.css");
  await fs.copy("./dist/web-component/favicon.ico", "public/favicon.ico");
})();
