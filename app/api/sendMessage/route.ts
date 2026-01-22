import { NextRequest, NextResponse } from "next/server";

const SENDER_URL = process.env.SENDER_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Missing message in request body" },
        { status: 400 }
      );
    }

    const response = await fetch(`${ SENDER_URL }/send-message`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authentication": AUTH_TOKEN || "",
        },
        body: JSON.stringify({ text: message }),
      }
    );

    if (!response.ok) {
      return NextResponse.json({ 
        success: false, 
        message: "Telegram API error" 
      }, { 
        status: response.status 
      });
    }
    
    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Telegram proxy error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
