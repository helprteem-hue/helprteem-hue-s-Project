export function generateTimeSlots(openTime: string, closeTime: string, durationMinutes: number): string[] {
  const slots: string[] = []
  const [openH, openM] = openTime.split(":").map(Number)
  const [closeH, closeM] = closeTime.split(":").map(Number)
  let current = openH * 60 + openM
  const end = closeH * 60 + closeM
  while (current + durationMinutes <= end) {
    const h = Math.floor(current / 60).toString().padStart(2, "0")
    const m = (current % 60).toString().padStart(2, "0")
    slots.push(`${h}:${m}`)
    current += durationMinutes
  }
  return slots
}

export function generateSlots(date: string, openTime: string, closeTime: string, durationMinutes: number): string[] {
  const slots: string[] = []

  const [openH, openM] = openTime.split(":").map(Number)
  const [closeH, closeM] = closeTime.split(":").map(Number)

  let current = openH * 60 + openM
  const end = closeH * 60 + closeM

  while (current + durationMinutes <= end) {
    const h = Math.floor(current / 60).toString().padStart(2, "0")
    const m = (current % 60).toString().padStart(2, "0")
    slots.push(`${date} ${h}:${m}`)
    current += durationMinutes
  }

  return slots
}
