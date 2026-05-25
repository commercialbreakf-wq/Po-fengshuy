import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://omnbhmuwizikzsocckqy.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tbmJobXV3aXppa3pzb2Nja3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTI5NjMsImV4cCI6MjA5NTI4ODk2M30.D9Jp6asXsiwl6w9Yg7wPVwqS_W8DKDjdkZNNeNh-1_8";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, adminPass, leadId, newStatus } = body;

    if (!adminPass) {
      return NextResponse.json({ error: "Пароль не указан" }, { status: 401 });
    }

    if (action === "list") {
      // Call get_leads_admin RPC
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_leads_admin`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ admin_pass: adminPass }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Supabase RPC list error:", errorText);
        return NextResponse.json(
          { error: "Неверный пароль или ошибка запроса" },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json({ success: true, leads: data });
    }

    if (action === "update") {
      if (!leadId || !newStatus) {
        return NextResponse.json({ error: "Недостаточно параметров" }, { status: 400 });
      }

      // Call update_lead_status_admin RPC
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/update_lead_status_admin`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          admin_pass: adminPass,
          lead_id: Number(leadId),
          new_status: newStatus,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Supabase RPC update error:", errorText);
        return NextResponse.json(
          { error: "Не удалось обновить статус" },
          { status: response.status }
        );
      }

      return NextResponse.json({ success: true });
    }

    if (action === "delete") {
      if (!leadId) {
        return NextResponse.json({ error: "Недостаточно параметров" }, { status: 400 });
      }

      // Call delete_lead_admin RPC
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/delete_lead_admin`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          admin_pass: adminPass,
          lead_id: Number(leadId),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Supabase RPC delete error:", errorText);
        return NextResponse.json(
          { error: "Не удалось удалить лид" },
          { status: response.status }
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Неверное действие" }, { status: 400 });
  } catch (error: any) {
    console.error("Admin leads API error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
