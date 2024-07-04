import React from 'react'

import PostItem from '@/components/PostItem/PostItem'

import PostInterface from '@/interfaces/post.interface'

const PostList: React.FC<{ data: PostInterface[] }> = ({ data }) => {
    return (
        <div className="mx-auto w-100 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {data.map((item: PostInterface) => (
                <PostItem key={item.id} data={item} />
            ))}
        </div>
    )
}

export default PostList
