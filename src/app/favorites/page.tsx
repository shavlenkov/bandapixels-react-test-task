'use client'

import { useEffect } from 'react'

import PostList from '@/components/PostList/PostList'
import Link from 'next/link'

import useStoreFavorites from '@/store/useStoreFavorites'

export default function FavoritesPage() {
    let { favorites, setFavorites } = useStoreFavorites()

    useEffect(() => {
        setFavorites()
    }, [setFavorites])

    return (
        <>
            <Link
                href={'/'}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                <i className="fa-sharp fa-solid fa-arrow-left"></i> Back
            </Link>
            <hr className="my-3" />
            {favorites.length != 0 ? (
                <PostList data={favorites} />
            ) : (
                <div>There is nothing here yet</div>
            )}
        </>
    )
}
