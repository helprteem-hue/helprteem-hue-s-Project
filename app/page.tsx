"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main
      dir="rtl"
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f6dfe7" }}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4">
        <button className="text-sm text-gray-600 font-medium">כניסה</button>
        <span className="text-xl font-bold tracking-tight" dir="ltr">Helpr</span>
      </header>

      {/* MAIN */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">

        {/* HEADLINE */}
        <h1 className="text-4xl font-bold leading-tight mb-4">
          העסק שלך,
          <br />
          אונליין תוך דקות
        </h1>

        <p className="text-gray-600 text-sm mb-8 max-w-sm leading-relaxed">
          בנה לך חנות מלאה מ-AI תוך דקות. העלה, או שלח קבצים — וזהו.
        </p>

        {/* INPUT BAR */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md flex items-center px-4 py-3 gap-3 mb-4">
          {/* Icons — left side (visually start in RTL) */}
          <div className="flex items-center gap-2 text-gray-400">
            <button type="button" className="hover:text-gray-600">📎</button>
            <button type="button" className="hover:text-gray-600">📷</button>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="בנה או תאר את העסק שלך... או העלה תמונות / קבצים"
            className="flex-1 text-sm outline-none bg-transparent text-right placeholder-gray-400"
            dir="rtl"
          />

          {/* AI Button — right side */}
          <button
            type="button"
            className="text-white text-xs font-semibold px-3 py-1.5 rounded-xl"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            AI ✦
          </button>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/build")}
            className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-xl"
          >
            בנה חנות
          </button>

          <button className="bg-white text-gray-700 text-sm font-medium px-6 py-2.5 rounded-xl shadow-sm">
            מצא שירות
          </button>
        </div>

        {/* BOTTOM CTA */}
        <button
          onClick={() => router.push("/build")}
          className="mt-10 text-white text-sm font-semibold px-8 py-3 rounded-2xl shadow-lg"
          style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
        >
          צור חנות עם AI ✨
        </button>
      </div>
    </main>
  )
}
