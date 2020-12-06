const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/web-component/runtime.js",
    "./dist/web-component/polyfills.js",
    "./dist/web-component/main.js",
  ];
  await fs.ensureDir("web-components-build");
  await concat(files, "web-components-build/web-component.js");
  await fs.copy(
    "./dist/web-component/styles.css",
    "web-components-build/styles.css"
  );
  await fs.copy(
    "./dist/web-component/favicon.ico",
    "web-components-build/favicon.ico"
  );
})();
