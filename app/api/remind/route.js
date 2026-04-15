import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { secret, email, name, software, daysLeft, type } = await request.json();

  if (secret !== process.env.CRON_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!email || !name || !software || !type) {
    return Response.json({ error: "Required fields missing" }, { status: 400 });
  }

  const softwareNames = {
    erpbridge: "ERPBridge",
    dental: "Dental Pro",
    hardware: "Hardware Pro",
    school: "School Pro",
    ration: "Ration Pro",
    pharma: "Pharma Pro",
    heera: "Diamond Desk",
    clinic: "ClinicOS",
    legal: "Legal Pro",
    hotel: "Hotel Pro",
    swarnshilpi: "स्वर्णशिल्पी",
    homeo: "Homeo Pro",
    psychiatrist: "Psychiatrist Pro",
  };

  const softwareName = softwareNames[software] || software;
  const paymentUrl = `https://www.nishantsoftwares.in?email=${encodeURIComponent(email)}&software=${software}`;

  let subject, html;

  if (type === "trial_expiring") {
    if (!daysLeft) return Response.json({ error: "daysLeft required" }, { status: 400 });
    subject = `${softwareName} — Trial ${daysLeft} दिन में समाप्त होगा`;
    html = `<p>Dear ${name},</p><p>आपका <strong>${softwareName}</strong> free trial <strong>${daysLeft} दिन</strong> में समाप्त होगा।</p><p>अभी खरीदें: <a href="${paymentUrl}">यहाँ click करें</a></p><p>Team निशांत सॉफ्टवेयर्स</p>`;
  } else if (type === "trial_expired") {
    subject = `${softwareName} — Trial समाप्त हो गया`;
    html = `<p>Dear ${name},</p><p>आपका <strong>${softwareName}</strong> free trial समाप्त हो गया है।</p><p>अभी खरीदें: <a href="${paymentUrl}">यहाँ click करें</a></p><p>Team निशांत सॉफ्टवेयर्स</p>`;
  } else if (type === "renewal_reminder") {
    if (!daysLeft) return Response.json({ error: "daysLeft required" }, { status: 400 });
    subject = `${softwareName} — Renewal Reminder (${daysLeft} दिन बाकी)`;
    html = `<p>Dear ${name},</p><p>आपका <strong>${softwareName}</strong> subscription <strong>${daysLeft} दिन</strong> में expire होगा।</p><p>अभी renew करें: <a href="${paymentUrl}">यहाँ click करें</a></p><p>Team निशांत सॉफ्टवेयर्स</p>`;
  } else {
    return Response.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "निशांत सॉफ्टवेयर्स <no-reply@nishantsoftwares.in>",
      to: [email],
      subject,
      html,
    });
  } catch (e) {
    console.error("Resend error:", e);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }

  return Response.json({ success: true });
}