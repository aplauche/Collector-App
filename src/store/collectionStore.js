import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useCollectionStore = create(
  persist(
    (set) => ({
      collection: [],
      addToCollection: (id) => set((state) => ({ collection: [...state.collection, id] })),
      removeFromCollection: (id) => set((state) => ({ collection: state.collection.filter(item => item != id) })),
      updateCollection: (newCollection) => set((state) => ({ collection: [...newCollection] })),
      emptyCollection: () => set((state) => ({ collection: [] })),
    }),
    { name: 'collection' }
  )
);

export default useCollectionStore