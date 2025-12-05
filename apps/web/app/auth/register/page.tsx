"use client";
import { useState } from "react";
import { apiPost } from "../../lib/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"artist" | "customer">("artist");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const user = await apiPost<{ id: string; name: string; email: string; role: string }>(
        "/auth/register",
        { name, email, password, role },
      );
      setStatus(`Registered as ${user.email}. You can login now.`);
    } catch (err) {
      setStatus((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-primary-50 p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-white/70 backdrop:blur rounded-xl p-6 shadow">
        <h1 className="text-2xl font-semibold">Register</h1>
        <label className="block">
          <span className="text-sm">Name</span>
          <input
            className="mt-1 w-full rounded border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <label className="block">
          <span className="text-sm">Role</span>
          <select
            className="mt-1 w-full rounded border p-2"
            value={role}
            onChange={(e) => setRole(e.target.value as "artist" | "customer")}
          >
            <option value="artist">Artist</option>
            <option value="customer">Customer</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full rounded bg-primary-400 text-white py-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {status && <p className="text-sm text-red-600">{status}</p>}
      </form>
    </div>
  );
}
