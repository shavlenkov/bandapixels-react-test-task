import React from 'react'

import { validateForm } from '@/utils/validator'

import useStorePosts from '@/store/useStorePosts'
import useStoreErrors from '@/store/useStoreErrors'

const PostCreationForm: React.FC = () => {
    const {
        data,
        setTitle,
        setFirstName,
        setLastName,
        setEmail,
        setBody,
        addPost
    } = useStorePosts()
    const { errors, setErrors } = useStoreErrors()

    const { first_name, last_name, email, title, body } = data

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault()

        if (
            validateForm(
                { first_name, last_name, email, title, body },
                setErrors
            )
        ) {
            addPost({ first_name, last_name, title, body, email })
        }
    }

    return (
        <>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            First name
                        </label>
                        <input
                            value={first_name}
                            onChange={event => setFirstName(event.target.value)}
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                        />
                        {errors.first_name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.first_name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Title
                        </label>
                        <input
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            type="text"
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Lorem ipsum..."
                            required
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Last name
                        </label>
                        <input
                            value={last_name}
                            onChange={event => setLastName(event.target.value)}
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            required
                        />
                        {errors.last_name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.last_name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="body"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Body
                        </label>
                        <input
                            value={body}
                            onChange={event => setBody(event.target.value)}
                            type="text"
                            id="body"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Lorem ipsum..."
                            required
                        />
                        {errors.body && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.body}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@company.com"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Create post
                </button>
            </form>
        </>
    )
}

export default PostCreationForm
