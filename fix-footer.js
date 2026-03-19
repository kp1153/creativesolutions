const fs = require("fs");

let c = fs.readFileSync("components/Footer.js", "utf8");
c = c.replace(/[^\x00-\x7F]+/g, (match) => {
  const map = {
    "कामता प्रसाद तिवारी": "Kamta Prasad Tiwari",
    "तिवारी भवन": "Tiwari Bhawan",
    "ग्रामः गहरपुर": "Village Gahrapur",
    "पोस्टः पुआरीकलाँ-221202": "Post Puarikalan-221202",
    "वाराणसी": "Varanasi",
    "उत्तर प्रदेश": "Uttar Pradesh",
    "भारत": "India",
    "निशांत सॉफ्टवेयर": "Nishant Software",
    "सर्वाधिकार सुरक्षित": "All rights reserved",
  };
  return map[match] || match;
});

fs.writeFileSync("components/Footer.js", c, "utf8");
console.log("Done");