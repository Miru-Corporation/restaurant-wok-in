export type DaySchedule = {
  day: string
  lunch: string | null
  dinner: string | null
}

export const HOURS: DaySchedule[] = [
  { day: 'Lundi',    lunch: null,          dinner: null },
  { day: 'Mardi',    lunch: '12h – 14h30', dinner: '18h – 22h' },
  { day: 'Mercredi', lunch: '12h – 14h30', dinner: '18h – 22h' },
  { day: 'Jeudi',    lunch: '12h – 14h30', dinner: '18h – 22h' },
  { day: 'Vendredi', lunch: '12h – 14h30', dinner: '18h – 22h30' },
  { day: 'Samedi',   lunch: '12h – 14h30', dinner: '18h – 22h30' },
  { day: 'Dimanche', lunch: '12h – 14h30', dinner: '18h – 22h' },
]

export function isOpenNow(): boolean {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 1=Mon, 2=Tue, ...
  const totalMinutes = now.getHours() * 60 + now.getMinutes()

  // Monday = closed
  if (day === 1) return false

  const lunchStart = 12 * 60
  const lunchEnd = 14 * 60 + 30
  const dinnerStart = 18 * 60
  // Fri & Sat close at 22h30, others at 22h
  const dinnerEnd = (day === 5 || day === 6) ? 22 * 60 + 30 : 22 * 60

  return (
    (totalMinutes >= lunchStart && totalMinutes <= lunchEnd) ||
    (totalMinutes >= dinnerStart && totalMinutes <= dinnerEnd)
  )
}
