import CommentInterface from '@/interfaces/comment.interface'

export default interface StoreCommentsInterface {
    comments: CommentInterface[]
    setComments: (id: number) => void
}
