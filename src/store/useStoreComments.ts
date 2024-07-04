import { create } from 'zustand'
import axios from 'axios'

import StoreCommentsInterface from '@/interfaces/storeComments.interface'

const useStoreComments = create<StoreCommentsInterface>(set => ({
    comments: [],

    setComments: async (id: number) => {
        let commentsResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/comments`
        )

        set({ comments: commentsResponse.data })
    }
}))

export default useStoreComments
