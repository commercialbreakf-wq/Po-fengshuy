import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://omnbhmuwizikzsocckqy.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tbmJobXV3aXppa3pzb2Nja3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTI5NjMsImV4cCI6MjA5NTI4ODk2M30.D9Jp6asXsiwl6w9Yg7wPVwqS_W8DKDjdkZNNeNh-1_8";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, type, project_type } = body;

    // Send payload to Supabase Rest API
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        name,
        phone,
        email: email || null,
        message: message || "",
        type: type || "callback",
        project_type: project_type || null,
        status: "new",
        messages: []
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error response:", errorText);
      return NextResponse.json(
        { error: "Ошибка при сохранении заявки в базу данных" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Lead submission API error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
