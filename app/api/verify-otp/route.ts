import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { mobile, otp } = await req.json();

    const res = await fetch(
      `https://control.msg91.com/api/v5/otp/verify?mobile=91${mobile}&otp=${otp}`,
      {
        method: "GET",
        headers: {
          authkey: process.env.MSG91_AUTH_KEY!,
        },
      }
    );

    const data = await res.json();

    if (data.type === "success") {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (err) {
    return NextResponse.json({ error: "OTP verify failed" });
  }
}