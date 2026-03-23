"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function BuildPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/storefront-preview?id=demo")
    }, 1500)
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
        <div
          className="w-28 h-28 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6366f1, #ec4899)",
            boxShadow: "0 0 80px rgba(99,102,241,0.7)",
          }}
        />
        <p className="text-white text-sm tracking-widest">מעצב את החנות שלך...</p>
      </main>
    )
  }

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">

        <h1 className="text-2xl font-bold text-right mb-2">בנה את החנות שלך</h1>
        <p className="text-sm text-gray-500 text-right mb-8 leading-relaxed">
          העלה תמונות, קבצים או תוכן מהעסק שלך — ואנחנו נבנה לך חנות מלאה תוך דקות
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* UPLOAD AREA */}
          <label className="block w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer bg-white hover:border-gray-400 transition-colors">
            <input type="file" multiple className="hidden" accept="image/*,.pdf,.doc,.docx" />
            <div className="flex justify-center gap-4 text-3xl mb-3">
              <span>📁</span>
              <span>📷</span>
            </div>
            <p className="text-sm text-gray-500">גרור לכאן תמונות או קבצים של העסק שלך</p>
            <p className="text-xs text-gray-400 mt-1">או לחץ לבחירה</p>
          </label>

          {/* BUSINESS NAME */}
          <input
            name="business_name"
            placeholder="שם העסק (אופציונלי)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white text-right"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium"
          >
            צור חנות
          </button>

        </form>
      </div>
    </main>
  )
}
