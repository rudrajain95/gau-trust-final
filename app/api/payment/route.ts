import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // paisa
      currency: "INR",
      receipt: "order_rcptid_11",
    });

    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json({ error: "Payment Failed" });
  }
}