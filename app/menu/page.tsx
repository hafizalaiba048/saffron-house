import { db } from "@/lib/db";
import { menuItem } from "@/lib/schema";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default async function MenuPage() {
  const items = await db.select().from(menuItem);

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Our Menu</h1>
      <p>Guest can view menu. Login to order.</p>
      <Link href="/login">Login to Order</Link>
      <LogoutButton />
<Link href="/cart">Cart</Link>
<Link href="/orders">My Orders</Link>
      <br /><br />

      {items.length === 0 ? (
        <p>No items yet. Admin will add items from Dashboard.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: 15, marginBottom: 10, borderRadius: 8 }}>
            <h3>{item.name} - Rs {item.price}</h3>
            <p>{item.description}</p>
            <p>{item.isAvailable ? "Available" : "Not Available"}</p>
          </div>
        ))
      )}
    </div>
  );
}
