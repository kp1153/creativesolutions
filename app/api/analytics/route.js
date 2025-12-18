import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Google Analytics credentials
const propertyId = process.env.GA_PROPERTY_ID;

// Private key ko properly format karo
const privateKey = process.env.GA_PRIVATE_KEY
  ? process.env.GA_PRIVATE_KEY.replace(/\\n/gm, "\n")
  : undefined;

// Initialize the client
let analyticsDataClient;

try {
  analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: process.env.GA_CLIENT_EMAIL,
      private_key: privateKey,
    },
  });
} catch (error) {
  console.error("Failed to initialize GA4 client:", error);
}

export async function GET() {
  try {
    // Validation
    if (!propertyId || !privateKey || !process.env.GA_CLIENT_EMAIL) {
      throw new Error("Missing required environment variables");
    }

    if (!analyticsDataClient) {
      throw new Error("Analytics client not initialized");
    }

    // Run report to get total users
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

    // Extract visitor count
    const visitors = response?.rows?.[0]?.metricValues?.[0]?.value || "0";

    return NextResponse.json(
      {
        visitors: parseInt(visitors),
        success: true,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("GA4 Analytics Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch analytics",
        message: error.message,
        success: false,
        visitors: 0,
      },
      { status: 500 }
    );
  }
}
