import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  const body = await req.json()

  const { data, error } = await supabase
    .from("storefronts")
    .insert([body])
    .select()
    .single()

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}
