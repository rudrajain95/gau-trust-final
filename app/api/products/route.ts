import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
  try {
    await client.connect();

    const db = client.db("gau-trust");

    const products = await db
      .collection("products")
      .find({})
      .toArray();

    return NextResponse.json({ products });

  } catch (error) {
    console.log(error);

    return NextResponse.json({ products: [] });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await client.connect();

    const db = client.db("gau-trust");

    await db.collection("products").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await client.connect();

    const db = client.db("gau-trust");

    await db.collection("products").deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false });
  }
}