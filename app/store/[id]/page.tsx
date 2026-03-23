import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { MapPin, Clock, Phone } from "lucide-react"

type Service = { name: string; price: number; duration: number }

type Storefront = {
  id: string
  business_name: string
  description: string
  phone: string
  services: Service[]
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: store, error } = await supabase
    .from("storefronts")
    .select("*")
    .eq("id", id)
    .single<Storefront>()

  if (error || !store) {
    notFound()
  }

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            {store.business_name.charAt(0)}
          </div>

          <h1 className="text-2xl font-bold mt-4">
            {store.business_name}
          </h1>

          {store.description && (
            <p className="text-gray-500 mt-2">
              {store.description}
            </p>
          )}

          {/* CTA */}
          <div className="flex justify-center gap-3 mt-5">
            {store.phone && (
              <a
                href={`https://wa.me/${store.phone}`}
                className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm"
              >
                WhatsApp
              </a>
            )}
            <button className="bg-black text-white px-5 py-2 rounded-xl text-sm">
              קבע תור עכשיו
            </button>
          </div>
        </div>

        {/* SERVICES */}
        {store.services && store.services.length > 0 && (
          <div className="mb-8">
            <h2 className="font-semibold mb-4 text-right">שירותים</h2>
            <div className="space-y-3">
              {store.services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center"
                >
                  <div className="text-right">
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-gray-500">
                      {service.duration} דק׳
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">₪{service.price}</span>
                    <button className="bg-black text-white px-3 py-1 rounded-lg text-xs">
                      הזמן
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER CTA */}
        <div className="text-center">
          <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
            קבע תור עכשיו
          </button>
          <p className="text-xs text-gray-400 mt-2">
            ללא עלות · מאובטח
          </p>
        </div>
      </div>
    </main>
  )
}
