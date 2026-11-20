"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, User, AlertCircle } from "lucide-react";
import RahnileLogo from "@/components/RahnileLogo";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Refresh to load the admin dashboard server side
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-rahnile-parchment">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-rahnile-limestone shadow-luxury space-y-6">
        <div className="text-center space-y-2">
          <RahnileLogo variant="dark" size="sm" className="justify-center mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-rahnile-charcoal pt-3">
            Hotel Staff Portal
          </h2>
          <p className="text-xs text-rahnile-charcoal/70">
            Sign in to moderate guest reviews and manage reservation enquiries.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-rahnile-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Staff username"
                className="w-full rounded-xl border border-rahnile-limestone pl-10 pr-4 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-rahnile-charcoal font-semibold mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-rahnile-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-rahnile-limestone pl-10 pr-4 py-2.5 text-sm text-rahnile-charcoal focus:outline-none focus:border-rahnile-gold bg-rahnile-cream/50"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-rahnile-aubergine text-white font-semibold text-xs uppercase tracking-wider hover:bg-rahnile-plum transition-colors shadow-md disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In to Management Portal"}
          </button>
        </form>

        <div className="p-4 rounded-xl bg-rahnile-parchment/60 border border-rahnile-limestone text-center text-[0.72rem] text-rahnile-charcoal/70 space-y-1">
          <p className="font-semibold text-rahnile-aubergine">Default Staff Credentials for Testing:</p>
          <p>Username: <code className="bg-white px-1.5 py-0.5 rounded border border-rahnile-limestone font-mono">admin</code></p>
          <p>Password: <code className="bg-white px-1.5 py-0.5 rounded border border-rahnile-limestone font-mono">Rahnile@2025</code></p>
        </div>
      </div>
    </div>
  );
}
