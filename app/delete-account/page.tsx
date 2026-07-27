"use client";

// app/delete-account/page.tsx

import { useState } from "react";

const API_BASE = "https://api.bilalsadatravels.com";

const DELETED_ITEMS = [
  "Your profile (name, email, phone, avatar, membership/loyalty data)",
  "Notifications",
  "Uploaded documents (passport photos, visa files, etc.)",
  "Password reset tokens",
  "Active login sessions — you'll be signed out everywhere immediately",
];

const RETAINED_ITEMS = [
  "Applications (Umrah, Hajj, Tour, Scholarship, Visa) are marked cancelled and kept for our legal, accounting, and audit obligations, then removed on our standard retention schedule",
  "Payment records required by Nigerian financial regulation (e.g. SCUML compliance) are retained as required by law",
];

type ApiResponse = {
  success: boolean;
  message?: string;
  token?: string;
  data?: { token?: string; [key: string]: unknown };
  [key: string]: unknown;
};

type Status = "idle" | "loading" | "success" | "error";

// Reads a response as JSON, but if the body isn't JSON (HTML error page, proxy
// error, etc.) surfaces a clear error instead of throwing an opaque
// "Unexpected token <" deep inside .json().
async function parseJsonResponse(res: Response): Promise<ApiResponse> {
  const text = await res.text();
  try {
    return JSON.parse(text) as ApiResponse;
  } catch {
    console.error(`Non-JSON response from ${res.url} (status ${res.status}):`, text.slice(0, 300));
    throw new Error(
      res.ok
        ? "Server returned an unexpected response format."
        : `Request failed (${res.status}). Please try again.`
    );
  }
}

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const loginRes = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const loginData = await parseJsonResponse(loginRes);

      if (!loginRes.ok) {
        throw new Error(loginData?.message || "Invalid email or password");
      }

      // ok() on the backend spreads data flat onto the response — { success, message, token, user }
      // not nested under a "data" key — so check both shapes to be safe.
      const token = loginData?.data?.token ?? loginData?.token;
      if (!token) {
        throw new Error("Login succeeded but no token was returned. Please try again.");
      }

      const deleteRes = await fetch(`${API_BASE}/api/auth/me`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const deleteData = await parseJsonResponse(deleteRes);

      if (!deleteRes.ok) {
        throw new Error(deleteData?.message || "Account deletion failed");
      }

      setStatus("success");
      setEmail("");
      setPassword("");
      setConfirmed(false);
    } catch (err) {
      console.error("Account deletion flow failed:", err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className="min-h-screen bg-[#f8f9fa] px-4 py-16"
    >
      <div className="mx-auto max-w-2xl rounded-lg border border-[#f3f4f6] bg-white p-8 shadow-sm">
        <header className="mb-8">
          <h1 className="border-b-2 border-[#dc2626] pb-3 text-3xl font-bold text-[#f97316]">
            Delete Your Account
          </h1>
          <p className="mt-4 leading-relaxed text-[#374151]">
            This page lets you permanently delete your Bilal Sada Travel &amp; Tours account and
            associated data, whether or not you have the app installed.
          </p>
        </header>

        <section className="mb-8 rounded-lg bg-[#f8f9fa] p-5">
          <h2 className="text-lg font-semibold text-gray-900">Option 1: Delete in the app</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-[#374151]">
            <li>Open the Bilal Sada Travel &amp; Tours app and sign in</li>
            <li>Go to Profile → Settings</li>
            <li>Tap &ldquo;Delete Account&rdquo; and confirm</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900">Option 2: Delete here</h2>
          <p className="mt-3 text-[#374151]">
            Sign in below to submit a deletion request. This action is immediate and cannot be
            undone.
          </p>

          {status === "success" ? (
            <div className="mt-5 rounded-lg border-l-4 border-[#f97316] bg-[#f8f9fa] p-4 text-sm text-[#374151]">
              Your account has been deleted. You&rsquo;ll receive a confirmation email shortly.
            </div>
          ) : (
            <form onSubmit={handleDelete} className="mt-5 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f97316] focus:outline-none focus:ring-1 focus:ring-[#f97316]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f97316] focus:outline-none focus:ring-1 focus:ring-[#f97316]"
                  placeholder="••••••••"
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-[#374151]">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-0.5 accent-[#dc2626]"
                  required
                />
                I understand this permanently deletes my account and cannot be undone.
              </label>

              {status === "error" && <p className="text-sm text-[#dc2626]">{errorMessage}</p>}

              <button
                type="submit"
                disabled={!confirmed || status === "loading"}
                className="rounded bg-[#dc2626] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? "Deleting…" : "Delete My Account"}
              </button>
            </form>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900">What gets deleted</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-[#374151]">
            {DELETED_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-semibold text-gray-900">What we retain, and why</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-[#374151]">
            {RETAINED_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="my-8 border-[#f3f4f6]" />

        <p className="text-xs text-gray-400">
          Need help instead? Contact us at{" "}
          <a href="mailto:hello@bilalsadatravels.com" className="text-[#f97316] hover:underline">
            hello@bilalsadatravels.com
          </a>
          . If you didn&rsquo;t make this request, no action is needed unless you delete your
          account yourself.
        </p>
      </div>
    </main>
  );
}