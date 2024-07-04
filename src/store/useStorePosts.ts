import { create } from 'zustand'
import axios from 'axios'

import { randomColor } from '@/utils/color'

import PostInterface from '@/interfaces/post.interface'
import StorePostsInterface from '@/interfaces/storePosts.interface'

const useStorePosts = create<StorePostsInterface>(set => ({
    posts: [],
    post: {},
    data: {
        first_name: '',
        last_name: '',
        email: '',
        title: '',
        body: '',
        userId: 0
    },
    loading: true,

    setPosts: async () => {
        try {
            const [postsResponse, usersResponse] = await Promise.all([
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
            ])

            const users: { [key: string]: any } = {}

            for (const user of usersResponse.data) {
                const name = (
                    user.name.split(' ')[0][0] + user.name.split(' ')[1][0]
                ).toUpperCase()
                users[user.id] = { name, avatarColor: randomColor() }
            }

            const postsWithUserDetails = postsResponse.data.map(
                (item: PostInterface) => ({
                    id: item.id,
                    user: users[item.userId],
                    title: item.title,
                    body: item.body
                })
            )

            set({ posts: postsWithUserDetails })
        } catch (error) {
            console.error('Failed to fetch posts', error)
        } finally {
            set({ loading: false })
        }
    },

    findPostById: async (id: number) => {
        set({ loading: true })

        try {
            const postResponse = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`
            )
            const userResponse = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/users/${postResponse.data.userId}`
            )

            const name = (
                userResponse.data.name.split(' ')[0][0] +
                userResponse.data.name.split(' ')[1][0]
            ).toUpperCase()

            const post = {
                ...postResponse.data,
                user: {
                    name,
                    avatarColor: randomColor()
                }
            }

            set({ post })
        } catch (error) {
            console.error('Failed to fetch post', error)
        } finally {
            set({ loading: false })
        }
    },

    addPost: data => {
        const { title, body, first_name, last_name, email } = data

        set((state: StorePostsInterface) => ({
            posts: [
                ...state.posts,
                {
                    id: state.posts.length + 1,
                    userId: Date.now(),
                    user: {
                        name: (first_name[0] + last_name[0]).toUpperCase(),
                        avatarColor: randomColor()
                    },
                    title,
                    body
                }
            ]
        }))

        set({
            data: {
                first_name: '',
                last_name: '',
                email: '',
                title: '',
                body: '',
                userId: null
            }
        })
    },

    setFirstName: first_name => {
        set((state: StorePostsInterface) => ({
            data: {
                ...state.data,
                first_name
            }
        }))
    },

    setLastName: last_name => {
        set((state: StorePostsInterface) => ({
            data: {
                ...state.data,
                last_name
            }
        }))
    },

    setEmail: email => {
        set((state: StorePostsInterface) => ({
            data: {
                ...state.data,
                email
            }
        }))
    },

    setTitle: title => {
        set((state: StorePostsInterface) => ({
            data: {
                ...state.data,
                title
            }
        }))
    },

    setBody: body => {
        set((state: StorePostsInterface) => ({
            data: {
                ...state.data,
                body
            }
        }))
    }
}))

export default useStorePosts
