import React from 'react'

import PostInterface from '@/interfaces/post.interface'

const PostOne: React.FC<{ data: PostInterface }> = ({ data }) => {
    return (
        <div className="relative flex w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <div
                className="w-[50px] h-[50px] border rounded-[50%] flex justify-center items-center mr-2"
                style={{
                    background: `${data.user?.avatarColor}`,
                    flex: 'none'
                }}
            >
                {data.user?.name}
            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <b>
                        <a href={`/posts/${data.id}`}>{data.title}</a>
                    </b>
                </div>
                <div>{data.body}</div>
            </div>
        </div>
    )
}

export default PostOne
