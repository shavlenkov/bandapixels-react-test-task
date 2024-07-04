'use client'

import { useEffect } from 'react'

import PostList from '@/components/PostList/PostList'
import Link from 'next/link'
import PostCreationForm from '@/components/PostCreationForm/PostCreationForm'
import Spinner from '@/components/Spinner/Spinner'

import useStorePosts from '@/store/useStorePosts'

export default function IndexPage() {
    const { posts, loading, setPosts } = useStorePosts()

    useEffect(() => {
        setPosts()
    }, [setPosts])

    return (
        <>
            <Link
                href={'/favorites'}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                <i className="fa-sharp fa-solid fa-bookmark"></i> Favorites
            </Link>
            <hr className="my-[20px]" />
            <PostCreationForm />
            <hr className="my-[20px]" />
            {loading ? (
                <Spinner />
            ) : posts.length != 0 ? (
                <PostList data={posts} />
            ) : (
                <div>There is nothing here yet</div>
            )}
        </>
    )
}
