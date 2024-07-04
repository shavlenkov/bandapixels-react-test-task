import React from 'react'

import CommentItem from '@/components/CommentItem/CommentItem'

import CommentInterface from '@/interfaces/comment.interface'

const CommentList: React.FC<{ data: CommentInterface[] }> = ({ data }) => {
    return (
        <div className="mx-auto my-[20px] w-100 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {data.map((item: CommentInterface) => (
                <CommentItem key={item.id} data={item} />
            ))}
        </div>
    )
}

export default CommentList
