import Sortable from 'sortablejs'
import { useShortcutStore } from '@/stores/ShortcutStore'

export function useSortableShortcuts(element: HTMLElement, orderAttribute: string) {
  const shortcutStore = useShortcutStore()

  Sortable.create(element, {
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    animation: 250,
    removeOnSpill: true,
    dataIdAttr: orderAttribute,
    store: {
      get: function (): string[] {
        return shortcutStore.order
      },
      set: function (sortable) {
        const newOrder = sortable.toArray()
        shortcutStore.reorder(newOrder)
      }
    }
  })
}
