import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    await client.connect();
    const db = client.db("gau-trust");

    let query = {};
    if (name) {
      query = { assignedTo: name };
    }

    const orders = await db
      .collection("orders")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ orders });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ orders: [] });
  }
}