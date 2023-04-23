import { create } from 'zustand'

const useFilterStore = create((set) => ({
  activeFilter: null,
  setActiveFilter: (filter) => set((state) => ({ activeFilter: filter})),
}))

export default useFilterStore