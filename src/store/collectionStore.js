import { toast } from 'react-hot-toast';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useCollectionStore = create(
  persist(
    (set) => ({
      collection: [],
      addToCollection: (id) => {
        toast.success('Added to collection', {duration: 1500})
        return set((state) => ({ collection: [...state.collection, id] }))
      },
      removeFromCollection: (id) => {
        toast('Removed from collection', {
          icon: '🗑️',
          duration: 1500
        })
        return set((state) => ({ collection: state.collection.filter(item => item != id) }))
      },
      updateCollection: (newCollection) => set((state) => ({ collection: [...newCollection] })),
    }),
    { name: 'collection' }
  )
);

export default useCollectionStore