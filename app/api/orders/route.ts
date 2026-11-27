import { db } from "@/lib/db";
import { order, orderItem } from "@/lib/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { items, total } = await req.json();
  const id = Math.random().toString(36).slice(2);

  await db.insert(order).values({
    id,
    userId: session.user.id,
    totalAmount: String(total),
    status: "Pending",
  });

  for (const item of items) {
    await db.insert(orderItem).values({
      id: Math.random().toString(36).slice(2),
      orderId: id,
      menuItemId: item.id,
      quantity: item.quantity,
      priceAtOrder: String(item.price),
    });
  }

  return Response.json({ success: true, orderId: id });
}

export async function GET() {
  const allOrders = await db.select().from(order);
  return Response.json(allOrders);
}
