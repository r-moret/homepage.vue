export type Shortcut = {
  id: string
  name: string
  link: string
}

export type Greeting = {
  morning: string
  noon: string
  afternoon: string
  night: string
}

export type DayTime = keyof Greeting
