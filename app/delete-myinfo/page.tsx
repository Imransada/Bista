"use client";

// app/data-deletion/page.js

import { useState, FormEvent, ChangeEvent } from "react";

const API_BASE = "https://api.bilalsadatravels.com";

const DATA_TABLE = [
  {
    category: "Profile information",
    examples: "Name, email, phone, date of birth, gender, nationality",
    deletable: "Yes, immediately on request",
  },
  {
    category: "Passport / ID documents",
    examples: "Uploaded passport photos, visa photos, ID scans",
    deletable: "Yes, immediately on request",
  },
  {
    category: "Notifications",
    examples: "In-app notification history",
    deletable: "Yes, immediately on request",
  },
  {
    category: "Login sessions",
    examples: "Active tokens/sessions",
    deletable: "Yes, revoked immediately on request",
  },
  {
    category: "Applications",
    examples: "Umrah, Hajj, Tour, Scholarship, Visa applications",
    deletable:
      "Marked cancelled and retained for legal/audit purposes, then deleted per our retention schedule",
  },
  {
    category: "Payment records",
    examples: "Transaction history tied to bookings",
    deletable: "Retained as required under Nigerian financial regulation (e.g. SCUML)",
  },
];

export default function DataDeletionPage() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/data-deletion-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Could not submit your request");
      }

      setStatus("success");
      setForm({ name: "", email: "", details: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email hello@bilalsadatravels.com instead."
      );
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
            Data Deletion Request
          </h1>
          <p className="mt-4 leading-relaxed text-[#374151]">
            This page explains what data Bilal Sada Travel &amp; Tours collects and lets you
            request deletion of specific data, even if you don&rsquo;t want to delete your entire
            account.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Looking to delete your whole account instead? Visit the{" "}
            <a href="/delete-account" className="text-[#f97316] hover:underline">
              account deletion page
            </a>
            .
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900">What data we hold</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-[#f8f9fa] p-1">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="px-3 py-2 font-medium">Category</th>
                  <th className="px-3 py-2 font-medium">Examples</th>
                  <th className="px-3 py-2 font-medium">Deletion</th>
                </tr>
              </thead>
              <tbody>
                {DATA_TABLE.map((row) => (
                  <tr key={row.category} className="border-t border-[#f3f4f6] align-top">
                    <td className="px-3 py-3 font-medium text-gray-900">{row.category}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.examples}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.deletable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-semibold text-gray-900">Request deletion</h2>
          <p className="mt-3 text-[#374151]">
            Tell us what you&rsquo;d like removed. We&rsquo;ll process eligible requests within
            30 days and email you once complete.
          </p>

          {status === "success" ? (
            <div className="mt-5 rounded-lg border-l-4 border-[#f97316] bg-[#f8f9fa] p-4 text-sm text-[#374151]">
              Your request has been received. We&rsquo;ll follow up at the email you provided.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f97316] focus:outline-none focus:ring-1 focus:ring-[#f97316]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email used on your account
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f97316] focus:outline-none focus:ring-1 focus:ring-[#f97316]"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-900">
                  What would you like deleted?
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  value={form.details}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f97316] focus:outline-none focus:ring-1 focus:ring-[#f97316]"
                  placeholder="e.g. delete my uploaded passport documents"
                />
              </div>

              {status === "error" && <p className="text-sm text-[#dc2626]">{errorMessage}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ea6a0a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? "Submitting…" : "Submit Request"}
              </button>
            </form>
          )}
        </section>

        <hr className="my-8 border-[#f3f4f6]" />

        <p className="text-xs text-gray-400">
          Prefer email? Send your request to{" "}
          <a href="mailto:hello@bilalsadatravels.com" className="text-[#f97316] hover:underline">
            hello@bilalsadatravels.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}