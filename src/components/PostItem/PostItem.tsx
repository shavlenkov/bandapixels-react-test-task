import React, { useRef } from 'react'

import { toggleFavorite, isFavorite } from '@/utils/favorites'
import { usePathname } from 'next/navigation'

import useStoreFavorites from '@/store/useStoreFavorites'

import PostInterface from '@/interfaces/post.interface'

const PostItem: React.FC<{ data: PostInterface }> = ({ data }) => {
    const { deleteFavorite } = useStoreFavorites()
    const iconRef = useRef(null)
    const pathname = usePathname()

    return (
        <div className="relative flex justify-between items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <div className="flex items-center">
                <div
                    style={{ background: `${data.user?.avatarColor}` }}
                    className="w-[50px] h-[50px] rounded-[50px] flex justify-center items-center mr-2"
                >
                    {data.user?.name}
                </div>
                <div>
                    <b>
                        <a href={`/posts/${data.id}`}>{data.title}</a>
                    </b>
                </div>
            </div>
            <div>
                {pathname === '/' ? (
                    <button
                        type="button"
                        onClick={() => toggleFavorite(data, iconRef)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        <i
                            ref={iconRef}
                            className={
                                isFavorite(data.id)
                                    ? 'fa-solid fa-star'
                                    : 'fa-regular fa-star'
                            }
                        ></i>
                    </button>
                ) : pathname === '/favorites' ? (
                    <button
                        type="button"
                        onClick={() => deleteFavorite(data.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default PostItem
