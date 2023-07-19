export type Post = {
    id: number
    user_id: number
    type_post: number
    size: number
    description: string
    file: string
    like: number
    user: User
}

export type User = {
    id: number
    username: string
    email: string
    role_id: number
    bio: string
    avatar: string
    nb_follower: number
    nb_followed: number
    twitch_id: string | null
    created_at: Date
    updated_at: Date
}

export type Comment = {
    id: number
    post_id: number
    user_id: number
    content: string
    like: number
    created_at: Date
    updated_at: Date
    user: User
}
