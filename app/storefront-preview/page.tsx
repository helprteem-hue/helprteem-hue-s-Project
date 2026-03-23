"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { MapPin, Clock } from "lucide-react"

const staticStore = {
  business_name: "Salon Beauty by Maya",
  description: "טיפולי יופי מתקדמים בהתאמה אישית",
  rating: 4.9,
  reviews: 128,
  location: "תל אביב",
  services: [
    { name: "בניית ציפורניים", price: 120, duration: 60 },
    { name: "לק ג׳ל", price: 80, duration: 45 },
    { name: "טיפול פנים", price: 200, duration: 90 },
  ],
  gallery: ["#e8c9d4", "#d4b8c7", "#c9a8bc", "#e0c5d0"],
  hours: [
    { day: "ראשון - חמישי", time: "09:00 - 18:00" },
    { day: "שישי", time: "09:00 - 14:00" },
    { day: "שבת", time: "סגור" },
  ],
}

export default function StorefrontPreview() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
type Service = { name: string; price: number; duration: number }
type Hour = { day: string; time: string }
type Store = typeof staticStore & { services: Service[]; gallery: string[]; hours: Hour[] }

  const [store] = useState<Store>(staticStore)

  if (!id) {
    return <div>No storefront ID</div>
  }

  const services = store.services ?? []
  const gallery = store.gallery ?? []
  const hours = store.hours ?? []

  return (
    <div dir="rtl" className="min-h-screen pb-24" style={{ backgroundColor: "#f7f7f7" }}>

      {/* HEADER */}
      <div className="bg-white px-4 pt-10 pb-6 text-center shadow-sm">
        <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
          {(store.business_name ?? "?").charAt(0)}
        </div>

        <h1 className="text-xl font-bold">{store.business_name}</h1>
        <p className="text-gray-500 text-sm mt-1">{store.description}</p>

        <div className="flex justify-center items-center gap-3 text-xs text-gray-400 mt-2">
          <span>⭐ {store.rating ?? "4.9"} ({store.reviews ?? 128} ביקורות)</span>
          {store.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {store.location}
            </span>
          )}
        </div>

        <button className="mt-5 bg-black text-white px-10 py-2.5 rounded-xl text-sm font-medium">
          קבע תור
        </button>
      </div>

      <div className="px-4 pt-6 space-y-6">

        {/* SERVICES */}
        {services.length > 0 && (
          <section>
            <h2 className="font-semibold text-right mb-3">שירותים</h2>
            <div className="space-y-3">
              {services.map((s: Service, i: number) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-4 py-4 shadow-sm flex justify-between items-center"
                >
                  <div className="text-right">
                    <p className="font-medium text-sm">{s.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.duration} דק׳</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">₪{s.price}</span>
                    <button className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">
                      הזמן
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GALLERY */}
        {gallery.length > 0 && (
          <section>
            <h2 className="font-semibold text-right mb-3">גלריה</h2>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {gallery.map((item: string, i: number) => (
                <div
                  key={i}
                  className="shrink-0 w-36 h-36 rounded-2xl"
                  style={{ backgroundColor: item.startsWith("#") ? item : "#e8c9d4" }}
                />
              ))}
            </div>
          </section>
        )}

        {/* HOURS */}
        {hours.length > 0 && (
          <section>
            <h2 className="font-semibold text-right mb-3 flex items-center justify-end gap-2">
              שעות פעילות
              <Clock className="w-4 h-4" />
            </h2>
            <div className="bg-white rounded-2xl px-4 py-4 shadow-sm space-y-2">
              {hours.map((h: Hour, i: number) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-500">{h.time}</span>
                  <span className="font-medium">{h.day}</span>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-linear-to-t from-white to-transparent">
        <button className="w-full bg-black text-white py-3.5 rounded-2xl text-sm font-semibold shadow-lg">
          קבע תור עכשיו
        </button>
      </div>

    </div>
  )
}
