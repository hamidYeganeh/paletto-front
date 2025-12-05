"use client";
import { useState, useEffect } from "react";
import { apiPost, apiGet } from "../../lib/api";

type LoginResponse = {
  access_token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: "artist" | "customer";
  };
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<{
    id: string;
    name: string;
    email: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      apiGet<{ id: string; name: string; email: string; role: string }>(
        "/auth/profile",
        token
      )
        .then(setProfile)
        .catch(() => setProfile(null));
    }
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await apiPost<LoginResponse>("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("access_token", res.access_token);
      setStatus(`Welcome ${res.user.name}`);
      const me = await apiGet<{
        id: string;
        name: string;
        email: string;
        role: string;
      }>("/auth/profile", res.access_token);
      setProfile(me);
    } catch (err) {
      setStatus((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-primary-50 p-6">
      <div className="w-full max-w-md space-y-4">
        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white/70 backdrop:blur rounded-xl p-6 shadow"
        >
          <h1 className="text-2xl font-semibold">Login</h1>
          <label className="block">
            <span className="text-sm">Email</span>
            <input
              type="email"
              className="mt-1 w-full rounded border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm">Password</span>
            <input
              type="password"
              className="mt-1 w-full rounded border p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </label>
          <button
            type="submit"
            className="w-full rounded bg-primary-400 text-white py-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {status && <p className="text-sm text-red-600">{status}</p>}
        </form>

        {profile && (
          <div className="bg-white/70 backdrop:blur rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold">Profile</h2>
            <p className="text-sm">Name: {profile.name}</p>
            <p className="text-sm">Email: {profile.email}</p>
            <p className="text-sm">Role: {profile.role}</p>
          </div>
        )}
      </div>
    </div>
  );
}
