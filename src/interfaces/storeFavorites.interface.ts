import PostInterface from '@/interfaces/post.interface'

export default interface StoreFavoritesInterface {
    favorites: PostInterface[]
    setFavorites: () => void
    deleteFavorite: (id: number) => void
}
