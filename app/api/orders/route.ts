import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await client.connect();
    const db = client.db("gau-trust");

    await db.collection("orders").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("DB ERROR:", error);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}