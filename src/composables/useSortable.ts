import Sortable from 'sortablejs'

export function useSortable(element: HTMLElement) {
  Sortable.create(element, {
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    animation: 250,
    removeOnSpill: true
  })
}
