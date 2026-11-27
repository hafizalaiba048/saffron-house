import { db } from "@/lib/db";
import { menuItem, order } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export default async function AdminPage() {
  const items = await db.select().from(menuItem);
  const orders = await db.select().from(order);

  async function addItem(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    await db.insert(menuItem).values({
      id: Math.random().toString(36).slice(2),
      name, description, price,
    });
    revalidatePath("/admin");
  }

  async function completeOrder(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const { eq } = await import("drizzle-orm");
    await db.update(order).set({ status: "Completed" }).where(eq(order.id, id));
    revalidatePath("/admin");
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>

      <h2>Add Menu Item</h2>
      <form action={addItem} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 400 }}>
        <input name="name" placeholder="Name e.g Biryani" required />
        <input name="description" placeholder="Description" required />
        <input name="price" placeholder="Price e.g 500" required />
        <button type="submit">Add Item</button>
      </form>

      <h2>Menu Items ({items.length})</h2>
      {items.map((i) => (
        <p key={i.id}>- {i.name} - Rs {i.price}</p>
      ))}

      <h2>Orders ({orders.length})</h2>
      {orders.length === 0 ? <p>No orders yet</p> : orders.map((o) => (
        <div key={o.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
          <p>Order: {o.id} - Total: Rs {o.totalAmount} - Status: {o.status}</p>
          {o.status !== "Completed" && (
            <form action={completeOrder}>
              <input type="hidden" name="id" value={o.id} />
              <button type="submit">Mark as Completed</button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}
