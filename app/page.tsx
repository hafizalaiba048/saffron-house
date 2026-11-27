export default function Home() {
  const dishes = [
    {
      name: "Chicken Biryani",
      price: "Rs. 450",
      desc: "Shahi masalon wali khushbudar biryani",
      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    },
    {
      name: "Chicken Karahi",
      price: "Rs. 1200",
      desc: "Desi ghee mein bani mazedar karahi",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f0d?w=600&q=80",
    },
    {
      name: "Zinger Burger",
      price: "Rs. 550",
      desc: "Crispy zinger with special sauce",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    },
    {
      name: "Malai Boti Pizza",
      price: "Rs. 999",
      desc: "Creamy malai boti with cheese",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    },
    {
      name: "Chicken Shawarma",
      price: "Rs. 350",
      desc: "Juicy shawarma with garlic mayo",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    },
    {
      name: "Kheer / Dessert",
      price: "Rs. 250",
      desc: "Meethi aur thandi shahi kheer",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ background: "#7A1C1C", color: "white", padding: "15px 25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>🍽️ Saffron House</h2>
        <div style={{ display: "flex", gap: 15 }}>
          <span>Home</span>
          <span>Menu</span>
          <span>About</span>
          <span style={{ background: "orange", padding: "5px 12px", borderRadius: 20, color: "black", fontWeight: "bold" }}>Order Now</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "50px 20px", background: "#FFF3D6" }}>
        <h1 style={{ fontSize: 48, margin: 0, color: "#7A1C1C" }}>Welcome to Saffron House</h1>
        <p style={{ fontSize: 18, color: "#555" }}>Shahi Zaiqa, Har Bite Mein Mohabbat</p>
        <button style={{ background: "#E67E22", color: "white", border: "none", padding: "12px 25px", fontSize: 16, borderRadius: 25, fontWeight: "bold" }}>
          View Full Menu ↓
        </button>
      </div>

      {/* Dishes */}
      <div style={{ padding: "30px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center" }}>Our Famous Dishes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {dishes.map((d) => (
            <div key={d.name} style={{ background: "white", borderRadius: 15, overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
              <div style={{ padding: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0 }}>{d.name}</h3>
                  <b style={{ color: "#E67E22" }}>{d.price}</b>
                </div>
                <p style={{ color: "#666", fontSize: 14 }}>{d.desc}</p>
                <button style={{ width: "100%", background: "#7A1C1C", color: "white", border: "none", padding: "10px", borderRadius: 8, fontWeight: "bold" }}>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#222", color: "white", textAlign: "center", padding: 25 }}>
        <h3>Saffron House</h3>
        <p>Main Bazaar Road, Sargodha | Phone: 0300-1234567</p>
        <p>Timing: 12 PM - 12 AM | Free Home Delivery</p>
      </div>
    </div>
  );
}
