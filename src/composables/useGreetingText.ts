import type { Greeting, DayTime } from '@/types'

const GREETINGS: { [key: string]: Greeting } = {
  es: {
    morning: '¡Buenos días!',
    noon: '¡Hola!',
    afternoon: '¡Buenas tardes!',
    night: '¡Buenas noches!'
  },
  en: {
    morning: 'Good morning!',
    noon: 'Hello!',
    afternoon: 'Good afternoon!',
    night: 'Good night!'
  },
  ja: {
    morning: 'おはよう',
    noon: 'こんにちは',
    afternoon: 'こんばんは',
    night: 'おやすみ'
  },
  zh: {
    morning: '早上好',
    noon: '你好',
    afternoon: '下午好',
    night: '晚安'
  },
  it: {
    morning: 'Buongiorno!',
    noon: 'Ciao!',
    afternoon: 'Buon pomeriggio!',
    night: 'Buonasera!'
  },
  fr: {
    morning: 'Bonjour !',
    noon: 'Salut !',
    afternoon: 'Bonsoir !',
    night: 'Bonne soirée !'
  },
  de: {
    morning: 'Guten Morgen!',
    noon: 'Hallo!',
    afternoon: 'Guten Tag!',
    night: 'Guten Abend!'
  },
  ru: {
    morning: 'Доброе утро!',
    noon: 'привет!',
    afternoon: 'Добрый день!',
    night: 'Спокойной ночи!'
  },
  el: {
    morning: 'καλημέρα',
    noon: 'γεια σου',
    afternoon: 'καλό απόγευμα',
    night: 'καλησπέρα'
  }
}

export function useGreetingText() {
  function currentDayTime(): DayTime {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
      return 'morning'
    } else if (hour >= 12 && hour < 17) {
      return 'noon'
    } else if (hour >= 17 && hour < 21) {
      return 'afternoon'
    } else {
      return 'night'
    }
  }

  function randomLanguage(): string {
    const dayTime = currentDayTime()

    const languages = Object.keys(GREETINGS)
    const language = languages[Math.floor(Math.random() * languages.length)]

    return GREETINGS[language][dayTime]
  }

  return { randomLanguage }
}
