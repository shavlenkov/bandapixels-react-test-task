import React from 'react'

import CommentInterface from '@/interfaces/comment.interface'

const CommentItem: React.FC<{ data: CommentInterface }> = ({ data }) => {
    return (
        <div className="relative flex  items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <div className="mr-[20px]">
                <b>{data.email}</b>
            </div>
            <div className="flex flex-col">
                <b className="mb-[10px]">{data.name}</b>
                <p>{data.body}</p>
            </div>
        </div>
    )
}

export default CommentItem
