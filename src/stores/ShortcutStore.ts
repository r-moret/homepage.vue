import { defineStore } from 'pinia'
import type { Shortcut } from '@/types'

type StateShape = {
  list: Shortcut[]
}

export const useShortcutStore = defineStore('ShortcutStore', {
  state: (): StateShape => ({
    list: [
      { id: '0', name: 'Discord', link: '#' },
      { id: '1', name: 'Facebook', link: '#' },
      { id: '2', name: 'Twitter', link: '#' },
      { id: '3', name: 'Youtube', link: '#' },
      { id: '4', name: 'Google', link: '#' },
      { id: '5', name: 'Gmail', link: '#' },
      { id: '6', name: 'VSCode', link: '#' },
      { id: '7', name: 'Spotify', link: '#' },
      { id: '8', name: 'Steam', link: '#' },
      { id: '9', name: 'Terminal', link: '#' },
      { id: '10', name: 'Folder', link: '#' },
      { id: '11', name: 'Chrome', link: '#' },
      { id: '12', name: 'Notes', link: '#' },
      { id: '13', name: 'Bookmarks', link: '#' }
    ]
  }),
  getters: {
    order: (state): string[] => {
      return state.list.map((shortcut) => shortcut.id)
    }
  },
  actions: {
    addShortcut(shortcut: Shortcut) {
      this.list.push(shortcut)
    },
    removeShortcut(shortcut: Shortcut) {
      this.list = this.list.filter((item: Shortcut) => item.id != shortcut.id)
    },
    reorder(newOrder: string[]) {
      const newOrderedShortcuts = newOrder.map((element) => {
        const oldPosition = this.order.indexOf(element)
        return this.list[oldPosition]
      })

      this.list = newOrderedShortcuts
    }
  }
})
