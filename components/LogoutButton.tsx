"use client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        window.location.href = "/";
      }}
      style={{
        background: "#8B4513",
        color: "white",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
}
