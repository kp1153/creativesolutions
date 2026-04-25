// app/school/page.js

"use client";
import { useEffect } from "react";

const SCHOOL_EXE_URL =
  "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const SCHOOL_PWA_URL = "https://school.nishantsoftwares.in";

const featuresHi = [
  { icon: "🎓", title: "छात्र प्रबंधन", desc: "हर छात्र का पूरा विवरण — नाम, कक्षा, अनुभाग, क्रमांक, अभिभावक का नाम और फोन। प्रवेश की तारीख भी। सब एक जगह।" },
  { icon: "📥", title: "सामूहिक प्रविष्टि", desc: "एक्सेल फाइल से सैकड़ों छात्रों की जानकारी एक बार में डालो — घंटों की मेहनत बचती है।" },
  { icon: "📋", title: "प्रवेश ट्रैकिंग", desc: "इस महीने कितने नए प्रवेश हुए, कितनी फीस बाकी है — एक नज़र में सब दिखे।" },
  { icon: "💰", title: "फीस प्रबंधन", desc: "किसने फीस दी, किसकी बाकी है, नियत तारीख कब है, बकायेदारों की सूची — सब एक जगह।" },
  { icon: "🧾", title: "फीस रसीद", desc: "भुगतान के बाद रसीद अपने आप तैयार हो जाती है। स्कूल का नाम, रसीद नंबर, छात्र का विवरण — प्रिंट करो।" },
  { icon: "✅", title: "दैनिक हाजिरी", desc: "कक्षावार और तारीखवार हाजिरी लो। आज कितने उपस्थित, कितने अनुपस्थित — तुरंत दिखे।" },
  { icon: "💬", title: "व्हाट्सऐप सूचना", desc: "अनुपस्थित बच्चों के अभिभावकों को एक क्लिक में हिंदी संदेश भेजो — संदेश अपने आप लिखा जाता है।" },
  { icon: "📝", title: "परीक्षा और परिणाम", desc: "परीक्षा निर्धारित करो, अंक डालो — श्रेणी, उत्तीर्ण-अनुत्तीर्ण, कक्षा औसत और अव्वल छात्र अपने आप निकलते हैं।" },
  { icon: "📄", title: "प्रगति पत्र", desc: "सभी विषयों के अंक, श्रेणी और टिप्पणी के साथ प्रगति पत्र अपने आप तैयार — प्रिंट के लिए तैयार।" },
  { icon: "📊", title: "मार्कशीट", desc: "त्रैमासिक, अर्धवार्षिक और वार्षिक — पूरी कक्षा की एक साथ, विषयवार, उत्तीर्ण-अनुत्तीर्ण के साथ।" },
  { icon: "🏅", title: "प्रमाण पत्र", desc: "स्थानांतरण, चरित्र, बोनाफाइड और जन्म प्रमाण पत्र — एक क्लिक में प्रिंट के लिए तैयार।" },
  { icon: "🚌", title: "परिवहन प्रबंधन", desc: "मार्ग, पड़ाव, मासिक शुल्क, चालक, वाहन नंबर — सब दर्ज करो। छात्रवार रसीद भी।" },
  { icon: "⬆️", title: "कक्षा प्रोन्नति", desc: "वर्ष के अंत में एक क्लिक से पूरी कक्षा के छात्र अगली कक्षा में — हाथ से कुछ नहीं करना।" },
  { icon: "📣", title: "सूचना पटल", desc: "स्कूल की सूचनाएं श्रेणी और प्राथमिकता के साथ पोस्ट करो — जरूरी सूचना लाल बैज के साथ दिखे।" },
  { icon: "🗓️", title: "समय-सारणी", desc: "कक्षावार और दिनवार समय-सारणी बनाओ — कौन से काल में कौन सा विषय और कौन से शिक्षक।" },
  { icon: "📊", title: "रिपोर्ट", desc: "कक्षावार छात्र संख्या, फीस संग्रह और बकाया, उपस्थिति प्रतिशत, परीक्षा औसत — एक पन्ने पर।" },
  { icon: "👨‍🏫", title: "शिक्षक प्रबंधन", desc: "शिक्षकों की जानकारी — विषय, योग्यता, फोन, नियुक्ति तारीख — सब दर्ज करो।" },
  { icon: "👨‍👩‍👧", title: "अभिभावक पोर्टल", desc: "अभिभावक घर बैठे अपने बच्चे की फीस, हाजिरी और परीक्षा परिणाम देख सकते हैं।" },
  { icon: "🎒", title: "छात्र पोर्टल", desc: "छात्र खुद अपना परिणाम, उपस्थिति प्रतिशत और स्कूल की सूचनाएं देख सकते हैं।" },
  { icon: "⚙️", title: "स्कूल सेटिंग", desc: "स्कूल का नाम, प्रधानाचार्य का नाम, संबद्धता संख्या — एक बार भरो, सभी रसीदों पर अपने आप छपे।" },
  { icon: "📱", title: "मोबाइल और कंप्यूटर", desc: "एक ही सॉफ्टवेयर — मोबाइल पर भी चलाओ, विंडोज़ कंप्यूटर पर भी। अलग से कोई खर्च नहीं।" },
];

const manualHi = [
  {
    title: "🔐 पहली बार Login कैसे करें",
    steps: [
      "अपने मोबाइल या कंप्यूटर में website खोलें — school.nishantsoftwares.in",
      "बीच में दिखेगा 'Admin Login' का बड़ा बटन — उस पर दबाएं",
      "Google से login करने का बटन आएगा — दबाएं",
      "अपना Gmail account चुनें (school का email हो तो बेहतर)",
      "बस! आप अंदर आ गए — 7 दिन तक बिल्कुल मुफ्त",
      "कोई password याद नहीं रखना, कोई card नहीं माँगा जाएगा",
    ],
  },
  {
    title: "⚙️ School की जानकारी कैसे भरें",
    steps: [
      "ऊपर मेनू में 'Settings' पर दबाएं",
      "School का पूरा नाम लिखें — जैसे 'Saraswati Vidya Mandir'",
      "School का पूरा पता डालें",
      "Principal साहब का नाम लिखें",
      "Principal का mobile नंबर डालें",
      "School की संबद्धता संख्या (Affiliation No.) भरें",
      "School का logo upload करें (अगर हो)",
      "नीचे 'Save' दबाएं",
      "अब हर certificate, फीस रसीद और प्रगति पत्र पर यह सब छपेगा",
    ],
  },
  {
    title: "🎓 छात्र (Student) कैसे जोड़ें — एक-एक करके",
    steps: [
      "मेनू में 'Students' पर दबाएं",
      "ऊपर दाहिनी तरफ 'Add Student' बटन दबाएं",
      "छात्र का पूरा नाम लिखें",
      "Roll number डालें (जैसे 1, 2, 25)",
      "कक्षा चुनें — Class 1, 2 ... 12 तक",
      "Section चुनें — A, B, C",
      "जन्म तारीख डालें",
      "पिता का नाम और mobile नंबर भरें (अभिभावक portal के लिए जरूरी)",
      "माता का नाम और पता डालें",
      "'Save' दबाएं — छात्र जुड़ गया",
    ],
  },
  {
    title: "📂 बहुत सारे छात्र एक साथ कैसे जोड़ें (Excel से)",
    steps: [
      "Students पेज पर 'Import' बटन दबाएं",
      "एक sample Excel file download होगी — उसमें columns की list है",
      "उस file में अपने सारे छात्रों का data भर दें",
      "हर row में एक छात्र — नाम, class, roll, अभिभावक का mobile",
      "File save करके वापस website पर 'Choose File' दबाएं",
      "वो file चुनें — सारे छात्र एक साथ जुड़ जाएंगे",
      "100 छात्र भी 1 मिनट में जुड़ जाएंगे — एक-एक भरने की ज़रूरत नहीं",
    ],
  },
  {
    title: "👨‍🏫 शिक्षक (Teacher) कैसे जोड़ें",
    steps: [
      "मेनू में 'Teachers' दबाएं",
      "'Add Teacher' पर जाएं",
      "शिक्षक का पूरा नाम लिखें",
      "विषय (Subject) चुनें — गणित, हिंदी, विज्ञान",
      "योग्यता डालें — B.Ed, M.A., M.Sc.",
      "Mobile नंबर भरें",
      "नियुक्ति की तारीख चुनें",
      "'Save' दबाएं",
      "जब Timetable बनाएंगे तो इन्हीं शिक्षकों के नाम सूची में दिखेंगे",
    ],
  },
  {
    title: "✅ रोज़ की हाज़िरी कैसे लें",
    steps: [
      "मेनू में 'Attendance' दबाएं",
      "'Mark Attendance' पर जाएं",
      "कक्षा और section चुनें — जैसे Class 5 - A",
      "तारीख आज की अपने आप होगी (बदलनी हो तो बदल दें)",
      "सारे छात्रों की list आ जाएगी",
      "हर छात्र के आगे 'Present' या 'Absent' दबाएं",
      "अंत में 'Save Attendance' दबाएं",
      "हो गया! अब किसी भी दिन की हाज़िरी देख सकते हैं",
      "जिनकी हाज़िरी कम है, उनके अभिभावक को WhatsApp भेज सकते हैं",
    ],
  },
  {
    title: "💰 फीस कैसे लें और रसीद कैसे बनाएं",
    steps: [
      "मेनू में 'Fees' पर दबाएं",
      "'Add' या 'Record Fee Payment' पर दबाएं",
      "छात्र का नाम search करें — list में दिखते ही चुन लें",
      "महीना चुनें — जिस महीने की फीस है (April, May...)",
      "रकम डालें — जैसे ₹500",
      "भुगतान का तरीका चुनें — Cash, UPI, Cheque",
      "'Save' दबाएं — रसीद अपने आप बन जाएगी",
      "रसीद पर print दबाकर छाप लें या PDF बनाकर अभिभावक को WhatsApp पर भेजें",
      "जिन छात्रों की फीस बाकी है, उनकी सूची भी इसी पेज पर दिखती है",
    ],
  },
  {
    title: "📝 परीक्षा (Exam) कैसे schedule करें और अंक कैसे डालें",
    steps: [
      "मेनू में 'Exams' दबाएं",
      "'Add Exam' पर जाएं",
      "Exam का नाम डालें — जैसे 'Half Yearly 2026' या 'Unit Test 1'",
      "कक्षा चुनें",
      "हर विषय की तारीख और max marks लिखें (जैसे Math 100, Hindi 50)",
      "'Save' दबाएं — exam schedule हो गया",
      "Exam के बाद उसी exam पर दबाएं",
      "हर छात्र के आगे उसके subject-wise marks डालें",
      "'Save Marks' दबाएं — Grade और percentage अपने आप जुड़ेगा",
      "उत्तीर्ण/अनुत्तीर्ण भी अपने आप तय होगा",
    ],
  },
  {
    title: "📄 प्रगति पत्र (Marksheet) कैसे निकालें",
    steps: [
      "Marks डालने के बाद 'Marksheet' पेज पर जाएं",
      "कक्षा और exam चुनें",
      "सारे छात्रों की marksheet list में दिखेगी",
      "एक की देखनी हो तो उस पर दबाएं — पूरी marksheet खुलेगी",
      "ऊपर 'Print' बटन दबाएं — A4 paper पर छप जाएगी",
      "मोबाइल पर PDF बन जाएगी — WhatsApp पर अभिभावक को भेज सकते हैं",
      "School का नाम, Principal का नाम, हर subject के अंक, ग्रेड, total — सब अपने आप",
    ],
  },
  {
    title: "👨‍👩‍👧 अभिभावक portal — माँ-बाप घर बैठे क्या-क्या देख सकते हैं",
    steps: [
      "अभिभावक को बताएं कि website खोलें",
      "होम पेज पर 'Parent Login' बटन है — उस पर दबाएं",
      "वो अपने बच्चे का mobile नंबर डालेंगे (जो हमने Add Student में भरा था)",
      "OTP आएगा उनके phone पर — डालें",
      "अंदर आते ही दिखेगा — फीस की स्थिति, हाज़िरी, exam के अंक, school की सूचनाएं",
      "अभिभावक को school आने की ज़रूरत नहीं — सब घर बैठे",
      "जब फीस नहीं भरी हो तो उन्हें reminder भी दिखेगा",
    ],
  },
  {
    title: "📣 School की सूचना (Notice) सबको कैसे भेजें",
    steps: [
      "मेनू में 'Notices' पर दबाएं",
      "'Add Notice' दबाएं",
      "सूचना का title लिखें — जैसे 'कल school बंद रहेगा'",
      "पूरी detail लिखें",
      "अगर बहुत जरूरी है तो 'Urgent' tick कर दें — लाल बैज के साथ दिखेगी",
      "किसको दिखानी है चुनें — सबको, या सिर्फ Class 5 को",
      "'Publish' दबाएं",
      "तुरंत सारे अभिभावकों के portal में दिख जाएगी",
    ],
  },
  {
    title: "🗓️ Timetable (समय-सारणी) कैसे बनाएं",
    steps: [
      "मेनू में 'Timetable' दबाएं",
      "'Add' पर जाएं",
      "कक्षा चुनें — जैसे Class 7 - A",
      "हर period और हर दिन के लिए subject + teacher चुनें",
      "Monday Period 1: Math - Sharma sir",
      "इसी तरह Tuesday, Wednesday... सब भर दें",
      "'Save' दबाएं — समय-सारणी बन गई",
      "हर छात्र और अभिभावक को अपनी कक्षा की timetable अपने आप दिखेगी",
    ],
  },
  {
    title: "🏅 TC, Bonafide, Character Certificate कैसे बनाएं",
    steps: [
      "मेनू में 'Certificates' पर दबाएं",
      "'Issue Certificate' दबाएं",
      "छात्र का नाम search करें — चुनें",
      "Certificate type चुनें — Transfer Certificate (TC), Bonafide, Character, Birth",
      "जरूरी details अपने आप भर जाएंगी (नाम, class, DOB)",
      "अगर कुछ extra लिखना है तो remarks में लिखें",
      "'Generate' दबाएं — Certificate तैयार",
      "Print करें — School का logo, Principal की sign वाला format पर निकलेगा",
    ],
  },
  {
    title: "🚌 Transport (बस सेवा) का record कैसे रखें",
    steps: [
      "मेनू में 'Transport' पर जाएं",
      "'Add' दबाकर routes बनाएं — जैसे Route 1: Civil Lines से School तक",
      "हर route की monthly fees डालें",
      "चालक (Driver) का नाम और वाहन नंबर भी डालें",
      "'Students' tab पर जाकर — कौन-सा छात्र किस route पर है वो जोड़ें",
      "हर महीने transport fees automatically calculate होगी",
      "Receipt भी print कर सकते हैं",
    ],
  },
  {
    title: "⬆️ साल के अंत में सब छात्रों को अगली class में कैसे promote करें",
    steps: [
      "मेनू में 'Promote' पर दबाएं",
      "जिस class को promote करना है वो चुनें — जैसे Class 5",
      "सारे छात्रों की list दिखेगी",
      "जो pass हुए हैं उन्हें tick करें (default में सब tick होते हैं)",
      "जो fail हुए हैं उनको untick कर दें (वो उसी class में रहेंगे)",
      "'Promote' दबाएं — सब Class 6 में चले जाएंगे एक साथ",
      "हर छात्र को एक-एक करने की ज़रूरत नहीं",
    ],
  },
  {
    title: "📊 Reports कैसे देखें और download करें",
    steps: [
      "मेनू में 'Reports' दबाएं",
      "जो report चाहिए चुनें — Attendance, Fees, Exam Results",
      "Date range चुनें — जैसे 1 April से 30 April",
      "कक्षा चुनें या 'All Classes' रखें",
      "'Generate' दबाएं — report तैयार",
      "ऊपर 'Download PDF' बटन है — दबाएं",
      "PDF बन जाएगी — Principal को या Trustees को email कर सकते हैं",
    ],
  },
  {
    title: "❓ कोई दिक्कत आए तो क्या करें",
    steps: [
      "तुरंत WhatsApp करें — 9996865069",
      "अपनी समस्या लिखें या screenshot भेजें",
      "हम तुरंत जवाब देंगे",
      "बड़ी दिक्कत हो तो phone call करें",
      "सुबह 9 बजे से रात 9 बजे तक support मिलेगा",
      "Email: prasad.kamta@gmail.com",
    ],
  },
];

const featuresEn = [
  { icon: "🎓", title: "Student Management", desc: "Full student profile — name, class, section, roll number, parent name & phone. Admission date too. All in one place." },
  { icon: "📥", title: "Bulk Import", desc: "Import hundreds of students at once from an Excel file — saves hours of manual entry." },
  { icon: "📋", title: "Admissions Tracking", desc: "See new admissions this month, total enrolled & pending fee count at a glance." },
  { icon: "💰", title: "Fee Management", desc: "Who paid, who has not, due dates, defaulter list — all in one place." },
  { icon: "🧾", title: "Fee Receipt", desc: "Receipt auto-generates after payment. School name, receipt number, student details — ready to print." },
  { icon: "✅", title: "Daily Attendance", desc: "Mark attendance class & date-wise. See today's present, absent & unmarked count instantly." },
  { icon: "💬", title: "WhatsApp Alert", desc: "One-click WhatsApp message to parents of absent students — message auto-written in Hindi." },
  { icon: "📝", title: "Exams & Results", desc: "Schedule exams, enter marks — grade, pass/fail, class average & topper calculated automatically." },
  { icon: "📄", title: "Report Cards", desc: "Auto-generate print-ready report cards with all subjects, marks, grade & remarks." },
  { icon: "📊", title: "Marksheet", desc: "Quarterly, Half-yearly & Annual — full class at once, subject-wise, with pass/fail." },
  { icon: "🏅", title: "Certificates", desc: "Transfer, Character, Bonafide & Birth Certificate — print-ready in one click." },
  { icon: "🚌", title: "Transport Management", desc: "Route, stop, monthly fee, driver, vehicle number — all recorded. Student-wise receipt too." },
  { icon: "⬆️", title: "Student Promotion", desc: "One click at year-end promotes the entire class to the next — no manual work." },
  { icon: "📣", title: "Notice Board", desc: "Post notices with category & priority — urgent notices shown with red badge." },
  { icon: "🗓️", title: "Timetable", desc: "Create class timetable — period-wise subject & teacher for every day of the week." },
  { icon: "📊", title: "Reports", desc: "Class-wise: student count, fees collected vs pending, attendance % & exam average — one page." },
  { icon: "👨‍🏫", title: "Teacher Management", desc: "Manage teacher profiles with subject, qualification, phone & joining date." },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Parents view their child's fees, attendance & results from home — anytime." },
  { icon: "🎒", title: "Student Portal", desc: "Students view their own results, attendance % & school notices." },
  { icon: "⚙️", title: "School Settings", desc: "Set school name, principal name & affiliation number — appears on all receipts automatically." },
  { icon: "📱", title: "Mobile + Desktop", desc: "One purchase — works as Android app & Windows desktop. No extra cost for either." },
];

const manualEn = [
  {
    title: "🔐 How to Login for the First Time",
    steps: [
      "Open the website on your mobile or computer — school.nishantsoftwares.in",
      "Click the big 'Admin Login' button in the middle",
      "A 'Sign in with Google' button will appear — click it",
      "Choose your Gmail account (preferably the school's email)",
      "Done! You are inside — 7 days completely free",
      "No password to remember, no card required",
    ],
  },
  {
    title: "⚙️ How to Setup School Details",
    steps: [
      "Click 'Settings' in the menu",
      "Enter the full school name — for example 'Saraswati Vidya Mandir'",
      "Enter the complete school address",
      "Type the Principal's full name",
      "Enter the Principal's mobile number",
      "Add your school's affiliation number",
      "Upload the school logo (if you have one)",
      "Click 'Save' at the bottom",
      "These details now appear on every certificate, fee receipt and report card automatically",
    ],
  },
  {
    title: "🎓 How to Add Students One by One",
    steps: [
      "Click 'Students' in the menu",
      "Click the 'Add Student' button on the top right",
      "Enter the student's full name",
      "Enter the roll number (1, 2, 25 etc.)",
      "Choose the class — Class 1 to Class 12",
      "Choose the section — A, B or C",
      "Enter the date of birth",
      "Type the father's name and mobile (required for parent portal)",
      "Type the mother's name and address",
      "Click 'Save' — student is added",
    ],
  },
  {
    title: "📂 How to Add Many Students Together (from Excel)",
    steps: [
      "On the Students page, click the 'Import' button",
      "A sample Excel file will download — it has all the columns listed",
      "Fill that file with all your students' data",
      "One row per student — name, class, roll, parent's mobile",
      "Save the file and click 'Choose File' on the website",
      "Select that file — all students get added at once",
      "Even 100 students get added in 1 minute — no need to enter one by one",
    ],
  },
  {
    title: "👨‍🏫 How to Add Teachers",
    steps: [
      "Click 'Teachers' in the menu",
      "Go to 'Add Teacher'",
      "Enter the teacher's full name",
      "Choose the subject — Math, Hindi, Science",
      "Enter qualification — B.Ed, M.A., M.Sc.",
      "Enter mobile number",
      "Choose joining date",
      "Click 'Save'",
      "These teacher names appear when creating the class timetable",
    ],
  },
  {
    title: "✅ How to Mark Daily Attendance",
    steps: [
      "Click 'Attendance' in the menu",
      "Go to 'Mark Attendance'",
      "Choose class and section — for example Class 5 - A",
      "Today's date is selected automatically (change if needed)",
      "All students in the class will appear",
      "Click 'Present' or 'Absent' next to each student",
      "Click 'Save Attendance' at the end",
      "Done! You can view any day's attendance anytime",
      "Send WhatsApp messages to parents of absent students with one click",
    ],
  },
  {
    title: "💰 How to Record Fees and Print Receipts",
    steps: [
      "Click 'Fees' in the menu",
      "Click 'Add' or 'Record Fee Payment'",
      "Search the student's name — pick from the list",
      "Choose the month — April, May, etc.",
      "Enter the amount — for example ₹500",
      "Choose payment mode — Cash, UPI or Cheque",
      "Click 'Save' — receipt is generated automatically",
      "Click print to print it, or send PDF to parents on WhatsApp",
      "The list of students with pending fees is also visible on this page",
    ],
  },
  {
    title: "📝 How to Schedule Exams and Enter Marks",
    steps: [
      "Click 'Exams' in the menu",
      "Go to 'Add Exam'",
      "Enter exam name — like 'Half Yearly 2026' or 'Unit Test 1'",
      "Choose the class",
      "Enter date and max marks for each subject (Math 100, Hindi 50)",
      "Click 'Save' — exam is scheduled",
      "After the exam, click that exam",
      "Enter subject-wise marks for each student",
      "Click 'Save Marks' — Grade and percentage calculated automatically",
      "Pass/fail is decided automatically too",
    ],
  },
  {
    title: "📄 How to Print Marksheet",
    steps: [
      "After entering marks, go to the 'Marksheet' page",
      "Choose class and exam",
      "All students' marksheets appear in the list",
      "Click any student to view full marksheet",
      "Click the 'Print' button at the top — prints on A4",
      "On mobile, a PDF is created — share with parents on WhatsApp",
      "School name, Principal name, all subject marks, grade, total — all auto-filled",
    ],
  },
  {
    title: "👨‍👩‍👧 Parent Portal — What Parents Can View from Home",
    steps: [
      "Tell parents to open the website",
      "On the home page, there's a 'Parent Login' button — click it",
      "They enter their child's mobile number (the one we filled in Add Student)",
      "OTP comes to their phone — enter it",
      "They see — fee status, attendance, exam marks, school notices",
      "No need for parents to come to school — everything from home",
      "If fees are pending, they see a reminder too",
    ],
  },
  {
    title: "📣 How to Post School Notices for Everyone",
    steps: [
      "Click 'Notices' in the menu",
      "Click 'Add Notice'",
      "Enter notice title — like 'School closed tomorrow'",
      "Write the full description",
      "If urgent, tick 'Urgent' — it appears with a red badge",
      "Choose audience — everyone, or only Class 5",
      "Click 'Publish'",
      "It instantly appears in all parents' portals",
    ],
  },
  {
    title: "🗓️ How to Create Timetable",
    steps: [
      "Click 'Timetable' in the menu",
      "Go to 'Add'",
      "Choose class — like Class 7 - A",
      "For each period and each day, choose subject + teacher",
      "Monday Period 1: Math - Sharma sir",
      "Repeat for Tuesday, Wednesday and so on",
      "Click 'Save' — timetable is ready",
      "Every student and parent automatically sees their class timetable",
    ],
  },
  {
    title: "🏅 How to Issue TC, Bonafide and Character Certificates",
    steps: [
      "Click 'Certificates' in the menu",
      "Click 'Issue Certificate'",
      "Search the student's name — pick",
      "Choose certificate type — TC, Bonafide, Character, Birth",
      "Required details auto-fill (name, class, DOB)",
      "Add anything extra in remarks if needed",
      "Click 'Generate' — certificate ready",
      "Print — comes with school logo and Principal signature format",
    ],
  },
  {
    title: "🚌 How to Manage Transport (Bus Service)",
    steps: [
      "Click 'Transport' in the menu",
      "Click 'Add' to create routes — like Route 1: Civil Lines to School",
      "Enter monthly fees for each route",
      "Add driver name and vehicle number too",
      "On the 'Students' tab — assign which student takes which route",
      "Transport fees calculate automatically every month",
      "You can print receipts too",
    ],
  },
  {
    title: "⬆️ How to Promote All Students at Year-End",
    steps: [
      "Click 'Promote' in the menu",
      "Choose the class to promote — like Class 5",
      "All students in that class appear",
      "Tick those who passed (default: all ticked)",
      "Untick those who failed (they stay in the same class)",
      "Click 'Promote' — all move to Class 6 together",
      "No need to do this one by one",
    ],
  },
  {
    title: "📊 How to View and Download Reports",
    steps: [
      "Click 'Reports' in the menu",
      "Choose the report — Attendance, Fees, Exam Results",
      "Choose date range — like 1 April to 30 April",
      "Choose class or keep 'All Classes'",
      "Click 'Generate' — report is ready",
      "Click 'Download PDF' at the top",
      "PDF is created — email to Principal or Trustees",
    ],
  },
  {
    title: "❓ What to Do if You Face Any Problem",
    steps: [
      "WhatsApp us immediately — 9996865069",
      "Write your problem or send a screenshot",
      "We respond instantly",
      "For bigger issues, call us",
      "Support available 9 AM to 9 PM",
      "Email: prasad.kamta@gmail.com",
    ],
  },
];

const comparison = [
  { feature: "छात्र प्रबंधन", market: true, ours: true },
  { feature: "फीस रसीद", market: true, ours: true },
  { feature: "दैनिक हाजिरी", market: true, ours: true },
  { feature: "परीक्षा / परिणाम", market: true, ours: true },
  { feature: "अभिभावक पोर्टल", market: true, ours: true },
  { feature: "TC / Character / Bonafide / Birth Certificate", market: false, ours: true },
  { feature: "Quarterly / Annual Marksheet — पूरी class", market: false, ours: true },
  { feature: "Transport module + Receipt", market: false, ours: true },
  { feature: "Student Promotion (year-end, 1 click)", market: false, ours: true },
  { feature: "Year-wise historical data", market: false, ours: true },
  { feature: "WhatsApp reminder — fees + attendance", market: false, ours: true },
  { feature: "Windows .EXE — बिना internet", market: false, ours: true },
  { feature: "Android PWA + Windows — एक खरीद", market: false, ours: true },
  { feature: "कीमत", market: false, ours: true, marketLabel: "₹15,000–₹25,000/वर्ष", oursLabel: "पहली बार ₹4,999 · server खर्च ₹2,500/वर्ष" },
  { feature: "Support", market: false, ours: true, marketLabel: "Call center / Ticket", oursLabel: "📞 फोन · 📧 Email · 💬 WhatsApp" },
];

export default function SchoolPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 4999, plan: "new", software: "school" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 4999 * 100,
      currency: "INR",
      name: "निशांत सॉफ्टवेयर्स",
      description: "निशांत स्कूल सॉफ्टवेयर — १ साल",
      order_id: order.id,
      prefill: { email: emailFromUrl },
      handler: async (response) => {
        await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            email: emailFromUrl,
            name: "",
            phone: "",
            plan: "new",
            software: "school",
          }),
        });
        alert("भुगतान सफल! सॉफ्टवेयर सक्रिय हो गया।");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top bar */}
      <div className="bg-amber-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सऐप पर बात करें</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">
            🖥️ <span className="text-amber-400">Nishant</span> Software
          </a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-base font-semibold px-4 py-1 rounded-full mb-4">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">🏫 निशांत स्कूल सॉफ्टवेयर</h1>
          <p className="text-xl font-bold text-white mb-2">विद्यालय प्रबंधन सॉफ्टवेयर</p>
          <p className="text-base mb-2 text-indigo-100">छात्र · फीस · हाजिरी · परीक्षा · सूचना पटल · समय-सारणी · अभिभावक पोर्टल</p>
          <p className="text-sm mb-8 text-indigo-200/80">२१ सुविधाएं · सीबीएसई निजी विद्यालयों के लिए · मोबाइल और कंप्यूटर दोनों पर</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-50 transition">🖥️ विंडोज़ डाउनलोड (.exe)</a>
            <div className="flex flex-col items-center gap-1">
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">📱 Android पर Install करें</a>
              <p className="text-sm text-indigo-200/70">Chrome ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">बाजार के सॉफ्टवेयर बनाम निशांत स्कूल सॉफ्टवेयर</h2>
          <p className="text-center text-gray-500 text-base mb-3">जो बाकियों में है — वो हमारे वाले में भी है</p>
          <p className="text-center text-red-600 font-extrabold text-lg mb-8">लेकिन जो हमारे वाले में है — वो बाकियों में नहीं। और दाम? कौड़ियों के।</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 text-left font-bold text-base">सुविधा</th>
                  <th className="px-4 py-3 text-center font-bold text-base">बाजार के सॉफ्टवेयर</th>
                  <th className="px-4 py-3 text-center font-bold text-base bg-green-600">निशांत स्कूल सॉफ्टवेयर</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${!row.market && row.ours ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className={`px-4 py-3 font-semibold text-base ${!row.market && row.ours ? "text-green-800" : "text-gray-800"}`}>
                      {!row.market && row.ours && <span className="text-orange-500 mr-1">🔥</span>}
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.marketLabel ? <span className="text-red-600 font-bold text-sm">{row.marketLabel}</span>
                        : row.market ? <span className="text-green-600 font-bold text-xl">✅</span>
                        : <span className="text-red-500 font-bold text-xl">❌</span>}
                    </td>
                    <td className="px-4 py-3 text-center bg-green-50">
                      {row.oursLabel ? <span className="text-green-700 font-extrabold text-sm">{row.oursLabel}</span>
                        : <span className="text-green-600 font-bold text-xl">✅</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-extrabold text-center text-gray-900 mb-6">🔥 सिर्फ हमारे वाले में — बाकियों में नहीं</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "🖥️", title: "बिना internet भी चलेगा", desc: "Windows .EXE मिलेगा — बिजली जाए, नेट जाए, काम नहीं रुकेगा। बाकी सब cloud-only हैं।" },
              { icon: "💸", title: "कौड़ियों के दाम", desc: "बाजार में ₹15,000–₹25,000 प्रति वर्ष। हमारे वाले में पहली बार ₹4,999 — फिर server खर्च मात्र ₹2,500 सालाना।" },
              { icon: "🏅", title: "TC, Character, Bonafide, Birth Certificate", desc: "एक click में print-ready — school letterhead के साथ। सस्ते software में यह नहीं होता।" },
              { icon: "📊", title: "Quarterly/Annual Marksheet", desc: "पूरी class की एक साथ, subject-wise, pass/fail के साथ — एक page पर।" },
              { icon: "🚌", title: "Transport module", desc: "Route, stop, monthly fee, driver, vehicle number, student-wise receipt — सब कुछ।" },
              { icon: "⬆️", title: "Student Promotion", desc: "साल के अंत में एक click से पूरी class अगली class में — हाथ से कुछ नहीं।" },
              { icon: "📅", title: "Year-wise historical data", desc: "2-3 साल पुराना marksheet, fees record — सब देख सकते हो।" },
              { icon: "💬", title: "WhatsApp reminder दोनों के लिए", desc: "Fees बाकी है तो reminder, बच्चा absent है तो reminder — message अपने आप लिखा जाता है।" },
              { icon: "📱", title: "Android + Windows — एक खरीद", desc: "एक ही software — mobile पर भी, computer पर भी। अलग से एक पैसा नहीं।" },
              { icon: "🤝", title: "सीधे developer से बात", desc: "📞 फोन · 📧 Email · 💬 WhatsApp — कोई call center नहीं, कोई ticket नहीं।" },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-extrabold text-gray-900 text-base mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Offer */}
      <section className="py-12 px-4 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white text-base font-bold px-4 py-1 rounded-full mb-4">🎁 खरीदने वालों को विशेष उपहार</div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">निशांत स्कूल सॉफ्टवेयर खरीदो —<br />स्कूल की वेबसाइट का SEO मुफ्त पाओ</h2>
          <p className="text-white/90 text-base mb-6 max-w-xl mx-auto">गूगल पर आपके स्कूल का नाम ऊपर आए — इसके लिए अलग से पैसे देने की जरूरत नहीं। सॉफ्टवेयर खरीदने पर यह सब मुफ्त मिलेगा:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            {[
              "✅ Google My Business profile setup — गूगल मैप पर स्कूल दिखेगा",
              "✅ Local SEO — 'best school in [your city]' में नाम आएगा",
              "✅ स्कूल website की basic on-page SEO",
              "✅ Title, description, keywords — सब optimize होगा",
              "✅ बाजार में कीमत: ₹5,000–₹10,000",
              "✅ आपके लिए: बिल्कुल मुफ्त",
            ].map((item, i) => (
              <div key={i} className="bg-white/20 rounded-xl px-4 py-3 text-base font-semibold">{item}</div>
            ))}
          </div>
          <button onClick={pay} className="bg-white text-orange-600 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:bg-orange-50 transition">💳 अभी खरीदें — ₹4,999 और SEO मुफ्त पाएं</button>
        </div>
      </section>

      {/* Self-hosting offer */}
      <section className="py-10 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-extrabold text-amber-400 mb-3">🖥️ अपना खुद का server चाहिए? पूरा नियंत्रण अपने हाथ में?</h2>
          <p className="text-gray-300 text-base mb-4 max-w-xl mx-auto">अगर आप किसी पर निर्भर नहीं रहना चाहते — तो हम <strong>Digital Ocean</strong> पर सिर्फ आपके विद्यालय के लिए अलग server setup करके <strong>ताला-चाबी आपको सौंप देंगे</strong>। आपका data, आपका server, आपका पूरा control।</p>
          <div className="bg-white/10 rounded-2xl px-6 py-4 inline-block mb-6 text-left">
            <p className="text-white font-extrabold text-base mb-2">इसमें क्या मिलेगा:</p>
            <ul className="text-gray-300 text-base space-y-1">
              <li>✅ Digital Ocean पर सिर्फ आपका अलग server</li>
              <li>✅ Setup, deployment, domain — सब हम करेंगे</li>
              <li>✅ काम पूरा होने पर login credentials आपको</li>
              <li>✅ हमारी मजदूरी — सिर्फ <strong className="text-amber-400">₹10,000 एक बार</strong></li>
              <li>✅ Server खर्च — विद्यालय खुद Digital Ocean को देगा (approx ₹800–₹1,500/माह)</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition text-base">💬 WhatsApp पर पूछें</a>
            <a href="tel:+919996865069" className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition text-base">📞 9996865069</a>
          </div>
        </div>
      </section>

      {/* Features Hindi */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-base mb-8">२१ सुविधाएं — एक सॉफ्टवेयर में, एक कीमत पर</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresHi.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-base mb-1">{f.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Hindi */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-3xl p-8 text-center mb-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">📖 उपयोग पुस्तिका — User Manual</h2>
            <p className="text-indigo-100 text-lg font-semibold">हर काम आसान हिंदी में — एक-एक कदम समझाया गया है</p>
            <p className="text-indigo-200 text-sm mt-2">यह पुस्तिका Principal साहब को दिखाकर उन्हें software चलाना सिखा सकते हैं</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manualHi.map((k, i) => (
              <div key={i} className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-extrabold text-indigo-800 mb-5 pb-3 border-b-2 border-indigo-100">{k.title}</h3>
                <ol className="space-y-4">
                  {k.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-base font-extrabold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">{j + 1}</span>
                      <span className="text-gray-900 text-lg leading-relaxed font-semibold">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
            <p className="font-extrabold text-gray-800 text-base mb-2">कोई दिक्कत आए तो तुरंत बताओ</p>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-extrabold px-6 py-3 rounded-xl text-base hover:bg-green-600 transition">💬 WhatsApp — 9996865069</a>
          </div>
        </div>
      </section>

      {/* Windows warning */}
      <section className="py-8 px-4 bg-yellow-50 border-y-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ स्थापना के समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-base text-gray-600 mb-3">विंडोज़ ११ में <strong>Smart App Control</strong> नाम की एक सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1">
            <li>१. Start menu में <strong>Windows Security</strong> खोलें</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>बंद (Off)</strong> करें</li>
            <li>४. .exe फाइल दोबारा चलाएं</li>
            <li>५. स्थापना के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कीमत — Pricing</h2>
          <p className="text-center text-gray-500 text-base mb-2">कोई छिपा हुआ शुल्क नहीं</p>
          <p className="text-center text-red-600 font-extrabold text-base mb-8">बाजार में ₹15,000–₹25,000 प्रति वर्ष — हमारे वाले में पहली बार ₹4,999, फिर server खर्च मात्र ₹2,500 सालाना</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">नया खाता</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-1">एक बार — १ साल शामिल</p>
              <p className="text-gray-500 text-base mb-3">उसके बाद server खर्च <strong>₹2,500/वर्ष</strong></p>
              <ul className="text-sm text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ सभी २१ सुविधाएं खुली</li>
                <li>✅ TC, Marksheet, Transport सब</li>
                <li>✅ विंडोज़ और एंड्रॉयड दोनों</li>
                <li>✅ 📞 📧 💬 सीधे developer से बात</li>
                <li className="text-green-700 font-bold">🎁 School website का SEO मुफ्त</li>
              </ul>
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-base mb-3">🆓 ७ दिन मुफ्त आज़माएं</a>
              <button onClick={pay} className="block w-full bg-gray-800 text-white font-bold py-2.5 rounded-xl hover:bg-gray-700 transition text-base">💳 अभी खरीदें — ₹4,999</button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीनीकरण — Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-3">server खर्च — प्रति वर्ष</p>
              <ul className="text-sm text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ सभी सुविधाएं जारी</li>
                <li>✅ नई सुविधाएं अपने आप मिलेंगी</li>
                <li>✅ डेटा सुरक्षित रहेगा</li>
                <li>✅ 📞 📧 💬 सहयोग प्राथमिकता से</li>
              </ul>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-base">💬 व्हाट्सऐप करें</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features English */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">What&apos;s Included?</h2>
          <p className="text-center text-gray-400 text-base mb-8">21 features — one software, one price</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresEn.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-base mb-1">{f.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual English */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-3xl p-8 text-center mb-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">📖 User Manual</h2>
            <p className="text-indigo-100 text-lg font-semibold">Step-by-step guide to every feature — in plain English</p>
            <p className="text-indigo-200 text-sm mt-2">Show this manual to the Principal to teach them how to use the software</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manualEn.map((k, i) => (
              <div key={i} className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-extrabold text-indigo-800 mb-5 pb-3 border-b-2 border-indigo-100">{k.title}</h3>
                <ol className="space-y-4">
                  {k.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-base font-extrabold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">{j + 1}</span>
                      <span className="text-gray-900 text-lg leading-relaxed font-semibold">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
            <p className="font-extrabold text-gray-800 text-base mb-2">Facing any problem? Tell us right away</p>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-extrabold px-6 py-3 rounded-xl text-base hover:bg-green-600 transition">💬 WhatsApp — 9996865069</a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — ७ दिन मुफ्त</h2>
          <p className="text-indigo-200 mb-6 text-base">कोई कार्ड नहीं · कोई प्रतिबद्धता नहीं · सीधे developer से बात</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 text-base font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}