import { create } from 'zustand'

import { getFavorites } from '@/utils/favorites'

import StoreFavoritesInterface from '@/interfaces/storeFavorites.interface'

const useStoreFavorites = create<StoreFavoritesInterface>((set, get) => ({
    favorites: [],

    setFavorites: () => {
        set({ favorites: getFavorites() })
    },

    deleteFavorite: (id: number) => {
        localStorage.removeItem(String(id))
        get().setFavorites()
    }
}))

export default useStoreFavorites
