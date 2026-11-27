import { db } from "@/lib/db";
import { menuItem } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await db.delete(menuItem).where(eq(menuItem.id, params.id));
  return Response.json({ success: true });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { name, price, description } = await req.json();
  await db.update(menuItem).set({ name, price, description }).where(eq(menuItem.id, params.id));
  return Response.json({ success: true });
}
