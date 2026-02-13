import { getTGUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { success: false, error: "Missing message in request body" },
        { status: 400 }
      );
    }
  
    const response = await fetch(getTGUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });
    
    const responseText = await response.text();
    if (!response.ok) {
      return NextResponse.json({ 
        success: false, 
        message: "Telegram API error",
        status: response.status,
        response: responseText
      }, { 
        status: response.status 
      });
    }
    
    const data = JSON.parse(responseText);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Telegram proxy error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}