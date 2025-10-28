// app/api/analytics/route.js
import { google } from "googleapis";

export async function GET() {
  try {
    const credentials = {
      client_email: process.env.GA_CLIENT_EMAIL,
      private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    // Run GA4 report
    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      requestBody: {
        metrics: [{ name: "totalUsers" }],

        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      },
    });

    const visitors = response.data.rows?.[0].metricValues?.[0]?.value || "0";

    return new Response(JSON.stringify({ visitors }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Failed to fetch visitors" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
