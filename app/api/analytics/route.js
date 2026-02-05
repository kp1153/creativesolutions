import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

export async function GET(request) {
  try {
    const propertyId = process.env.GA_PROPERTY_ID;
    const clientEmail = process.env.GA_CLIENT_EMAIL;
    const privateKey = process.env.GA_PRIVATE_KEY;

    console.log("=== GA4 Configuration Check ===");
    console.log("Property ID:", propertyId ? "✓ Set" : "✗ Missing");
    console.log("Client Email:", clientEmail ? "✓ Set" : "✗ Missing");
    console.log("Private Key:", privateKey ? "✓ Set" : "✗ Missing");

    if (!propertyId || !clientEmail || !privateKey) {
      return NextResponse.json(
        {
          error: "Missing GA4 credentials",
          details: {
            propertyId: !!propertyId,
            clientEmail: !!clientEmail,
            privateKey: !!privateKey,
          },
          visitors: 0,
        },
        { status: 500 }
      );
    }

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
    });

    console.log("✓ GA4 Client initialized");

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2020-01-01",
          endDate: "today",
        },
      ],
      metrics: [
        {
          name: "totalUsers",
        },
      ],
    });

    const visitorValue = response?.rows?.[0]?.metricValues?.[0]?.value;
    const visitors = visitorValue ? parseInt(visitorValue) : 0;

    console.log("=== GA4 API Response ===");
    console.log("Raw Value:", visitorValue);
    console.log("Parsed Visitors:", visitors);
    console.log("Response Rows:", response?.rows?.length || 0);

    return NextResponse.json(
      {
        visitors: visitors,
        success: true,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("=== GA4 Error ===");
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Full Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch analytics",
        message: error.message,
        errorType: error.name,
        success: false,
        visitors: 0,
      },
      { status: 500 }
    );
  }
}