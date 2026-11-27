"use client";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/orders").then(r => r.json()).then(setOrders);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>My Orders</h1>
      {orders.length === 0 && <p>Abhi koi order nahi hai.</p>}
      {orders.map((o: any) => (
        <div key={o.id} style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
          <p>Order: {o.id}</p>
          <p>Total: Rs. {o.total}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
