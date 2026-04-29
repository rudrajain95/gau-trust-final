import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function POST(req: Request) {
  try {
    const { id, deliveryBoy } = await req.json();

    await client.connect();
    const db = client.db("gau-trust");

    await db.collection("orders").updateOne(
      { _id: new ObjectId(id) },
      { $set: { assignedTo: deliveryBoy } }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}