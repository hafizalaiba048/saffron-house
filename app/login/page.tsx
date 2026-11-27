"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (isSignup) {
      await authClient.signUp.email({ email, password, name });
    } else {
      await authClient.signIn.email({ email, password });
    }
    router.push("/menu");
  }

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {isSignup && (
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        )}
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <br />
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have account? Login" : "New? Create account"}
      </button>
    </div>
  );
}
