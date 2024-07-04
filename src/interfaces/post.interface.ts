import UserInterface from '@/interfaces/user.interface'

export default interface PostInterface {
    id: number
    title: string
    body: string
    userId: number
    user: UserInterface
}
