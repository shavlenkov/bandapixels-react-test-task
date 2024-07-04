import { create } from 'zustand'
import axios from 'axios'

import StoreUserInterface from '@/interfaces/storeUser.interface'

const useStoreUser = create<StoreUserInterface>(set => ({
    user: {},

    findUserById: async (id: number) => {
        let userResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
        )

        set({ user: userResponse.data })
    }
}))

export default useStoreUser
