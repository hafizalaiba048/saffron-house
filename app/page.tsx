"use client";
import { useState } from "react";

const dishes = [
  { name: "Chicken Biryani", price: 350, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400", desc: "Fragrant basmati rice layered with tender chicken and aromatic spices." },
  { name: "Chicken Karahi", price: 850, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f0d?w=400", desc: "Traditional wok-cooked chicken in rich tomato and green chilli gravy." },
  { name: "Zinger Burger", price: 450, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", desc: "Crispy fried chicken fillet with mayo and fresh lettuce in soft bun." },
  { name: "Beef Burger", price: 550, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", desc: "Juicy grilled beef patty with cheese, sauce and fresh vegetables." },
  { name: "Chicken Tikka", price: 600, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400", desc: "Charcoal grilled chicken marinated in yogurt and traditional spices." },
  { name: "Seekh Kabab", price: 500, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400", desc: "Minced meat skewers grilled to perfection with smoky flavour." },
];

export default function Home() {
  const [orderCount, setOrderCount] = useState(0);

  return (
    <div id="home" style={{ fontFamily: "Arial, sans-serif", background: "#FFF8F0", minHeight: "100vh" }}>
      {/* HEADER */}
      <div style={{ background: "#7A1C1C", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "orange", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🍽️</div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: 20 }}>Saffron House</div>
            <div style={{ fontSize: 12, color: "#FFD9A0" }}>Authentic Pakistani Cuisine</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Home</a>
          <a href="#menu" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Menu</a>
          <a href="#about" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>About</a>
          <a href="#menu" style={{ background: "orange", padding: "5px 12px", borderRadius: 20, color: "black", fontWeight: "bold", textDecoration: "none", cursor: "pointer" }}>Order Now</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ background: "#FDE8D0", display: "inline-block", padding: "5px 15px", borderRadius: 20, fontSize: 14 }}>⭐ Rated 4.9 by 2,000+ Happy Customers</div>
        <h1 style={{ fontSize: 42, margin: "15px 0" }}>Taste The Magic Of <span style={{ color: "#E67E22" }}>Authentic Pakistani</span> Flavours</h1>
        <p style={{ color: "#555", maxWidth: 600, margin: "0 auto" }}>From sizzling Karahi to fragrant Biryani - experience the rich heritage of Pakistani cuisine, cooked with love and served with pride.</p>
        <div style={{ marginTop: 20, display: "flex", gap: 15, justifyContent: "center" }}>
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: "#E67E22", color: "white", border: "none", padding: "12px 25px", fontSize: 16, borderRadius: 25, fontWeight: "bold", cursor: "pointer" }}>
            View Full Menu ↓
          </button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: "white", border: "1px solid #ddd", padding: "12px 25px", fontSize: 16, borderRadius: 25, fontWeight: "bold", cursor: "pointer" }}>
            Our Story
          </button>
        </div>
        {orderCount > 0 && <p style={{ marginTop: 15, fontWeight: "bold", color: "#7A1C1C" }}>🛒 Items in Order: {orderCount}</p>}
      </div>

      {/* DISHES */}
      <div id="menu" style={{ padding: "30px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 30 }}>Our Famous Dishes</h2>
        <p style={{ textAlign: "center", color: "#666" }}>Handcrafted with the finest ingredients and traditional recipes passed down through generations.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 25 }}>
          {dishes.map((d) => (
            <div key={d.name} style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0 }}>{d.name}</h3>
                  <span style={{ background: "#E67E22", color: "white", padding: "3px 10px", borderRadius: 15, fontWeight: "bold" }}>Rs. {d.price}</span>
                </div>
                <p style={{ color: "#666", fontSize: 14 }}>{d.desc}</p>
                <button onClick={() => { setOrderCount(orderCount + 1); alert(d.name + " Added to Order! Total Items: " + (orderCount + 1)); }} style={{ width: "100%", background: "#7A1C1C", color: "white", border: "none", padding: "10px", borderRadius: 8, fontWeight: "bold", cursor: "pointer" }}>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" style={{ background: "#7A1C1C", color: "white", textAlign: "center", padding: "40px 20px", marginTop: 30 }}>
        <h2>About Saffron House</h2>
        <p style={{ maxWidth: 600, margin: "0 auto" }}>We serve authentic Pakistani food with love in Sargodha. Fresh ingredients, traditional recipes, and warm hospitality.</p>
        <p style={{ marginTop: 15 }}>📍 Sargodha, Punjab | 📞 Order Now from Menu Above</p>
      </div>
    </div>
  );
}
