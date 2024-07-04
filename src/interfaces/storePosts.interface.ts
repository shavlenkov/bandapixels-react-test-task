import PostInterface from '@/interfaces/post.interface'

export default interface StorePostsInterface {
    posts: PostInterface[] | []
    post: PostInterface | {}
    data: {
        title: string
        body: string
        first_name: string
        last_name: string
        email: string
        userId: number | null
    }
    loading: boolean
    setPosts: () => Promise<void>
    findPostById: (id: number) => Promise<void>
    addPost: (data: {
        title: string
        body: string
        first_name: string
        last_name: string
        email: string
    }) => void
    setFirstName: (first_name: string) => void
    setLastName: (last_name: string) => void
    setEmail: (email: string) => void
    setTitle: (title: string) => void
    setBody: (body: string) => void
}
