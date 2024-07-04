import { MutableRefObject } from 'react'

import PostInterface from '@/interfaces/post.interface'

export function toggleFavorite(
    item: PostInterface,
    iconRef: MutableRefObject<any>
): void {
    if (isFavorite(item.id)) {
        localStorage.removeItem(String(item.id))
        iconRef.current.className = 'fa-regular fa-star'
    } else {
        let data = {
            id: item.id,
            title: item.title,
            user: {
                name: item.user.name,
                avatarColor: item.user.avatarColor
            }
        }

        localStorage.setItem(String(item.id), JSON.stringify(data))
        iconRef.current.className = 'fa-solid fa-star'
    }
}

export function isFavorite(id: number): boolean {
    return localStorage.getItem(String(id)) !== null
}

export function getFavorites(): PostInterface[] {
    let items = []

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)

        if (!isNaN(Number(key))) {
            let value = localStorage.getItem(String(key))
            if (value) {
                items.push(JSON.parse(value))
            }
        }
    }

    return items
}
