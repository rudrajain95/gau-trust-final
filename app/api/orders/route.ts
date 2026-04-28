import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await client.connect();
    const db = client.db("test"); // ⚠️ IMPORTANT (change if needed)

    const result = await db.collection("orders").insertOne(body);

    return Response.json({ success: true, result });
  } catch (error) {
    console.error("ORDER SAVE ERROR:", error);
    return Response.json({ success: false, error });
  }
}