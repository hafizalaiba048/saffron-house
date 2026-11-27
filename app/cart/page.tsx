"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  function changeQty(id: string, delta: number) {
    const updated = cart.map((c) => c.id === id ? { ...c, quantity: c.quantity + delta } : c).filter((c) => c.quantity > 0);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  async function placeOrder() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, total }),
    });
    if (res.ok) {
      setMessage("Order Placed Successfully! Status: Pending");
      setCart([]);
      localStorage.removeItem("cart");
    } else {
      setMessage("Please Login First to Place Order");
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty. Go to Menu.</p> : cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
          <b>{item.name}</b> - Rs {item.price} x {item.quantity}
          <br />
          <button onClick={() => changeQty(item.id, 1)}>+</button>
          <button onClick={() => changeQty(item.id, -1)} style={{ marginLeft: 5 }}>-</button>
        </div>
      ))}
      <h3>Total: Rs {total}</h3>
      <button onClick={placeOrder}>Place Order</button>
      <p>{message}</p>
    </div>
  );
}
