"use client";
export default function LogoutButton() {
  return (
    <button onClick={async () => {
      await fetch("/api/auth/sign-out", { method: "POST" });
      window.location.href = "/login";
    }} style={{ padding: "8px 16px", background: "#333", color: "white", borderRadius: 8, marginLeft: 10 }}>
      Logout
    </button>
  );
}
