const fs = require("fs");
const path = require("path");

const pages = [
  "app/page.js",
  "app/erpbridge/page.js",
  "app/dental/page.js",
  "app/hardware/page.js",
  "app/school/page.js",
  "app/ration/page.js",
  "app/pharma/page.js",
  "app/heera/page.js",
  "app/clinic/page.js",
  "app/legal/page.js",
  "app/hotel/page.js",
];

const base = process.cwd();
let changed = 0;

for (const page of pages) {
  const filePath = path.join(base, page);
  if (!fs.existsSync(filePath)) { console.log("SKIP: " + page); continue; }
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;
  content = content.replace(/<div className="bg-amber-500 py-2[\s\S]*?<\/div>\n/g, "");
  content = content.replace(/<nav className="sticky top-0[\s\S]*?<\/nav>\n/g, "");
  if (content !== original) { fs.writeFileSync(filePath, content, "utf8"); console.log("DONE: " + page); changed++; }
  else { console.log("NO CHANGE: " + page); }
}
console.log("\nTotal changed: " + changed);
