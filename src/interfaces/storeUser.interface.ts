import UserInterface from '@/interfaces/user.interface'

export default interface StoreUserInterface {
    user: UserInterface | {}
    findUserById: (id: number) => void
}
