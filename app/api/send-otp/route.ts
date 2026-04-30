import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { mobile } = await req.json();

    const res = await fetch("https://control.msg91.com/api/v5/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authkey: process.env.MSG91_AUTH_KEY!,
      },
      body: JSON.stringify({
        mobile: `91${mobile}`,
        template_id: process.env.MSG91_TEMPLATE_ID,
      }),
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "OTP send failed" });
  }
}