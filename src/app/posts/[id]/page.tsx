'use client'

import { useEffect } from 'react'

import Link from 'next/link'
import PostOne from '@/components/PostOne/PostOne'
import CommentList from '@/components/CommentList/CommentList'
import Spinner from '@/components/Spinner/Spinner'

import useStorePosts from '@/store/useStorePosts'
import useStoreComments from '@/store/useStoreComments'

import PostInterface from '@/interfaces/post.interface'

export default function PostPage({ params }: { params: { id: number } }) {
    const { post, loading, findPostById } = useStorePosts()
    const { comments, setComments } = useStoreComments()

    useEffect(() => {
        findPostById(params.id)
        setComments(params.id)
    }, [params.id, findPostById, setComments])

    return (
        <>
            <Link
                href="/"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                <i className="fa-sharp fa-solid fa-arrow-left"></i> Back
            </Link>
            <hr className="my-3" />
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <PostOne data={post as PostInterface} />
                    <div className="mt-[40px]">
                        <b>Comments:</b>
                    </div>
                    <CommentList data={comments} />
                </>
            )}
        </>
    )
}
