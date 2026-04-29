import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { mobile, otp } = await req.json();

    await client.connect();
    const db = client.db("gau-trust");

    const record = await db.collection("otp").findOne({
      mobile,
      otp,
    });

    if (!record) {
      return NextResponse.json({ success: false });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("VERIFY ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}