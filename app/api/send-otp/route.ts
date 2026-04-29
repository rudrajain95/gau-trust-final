import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { mobile } = await req.json();

    if (!mobile) {
      return NextResponse.json({ error: "Mobile required" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await client.connect();
    const db = client.db("gau-trust");

    await db.collection("otp").insertOne({
      mobile,
      otp,
      createdAt: new Date(),
    });

    console.log("OTP:", otp); // ⚠️ console में दिखेगा

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("OTP ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}