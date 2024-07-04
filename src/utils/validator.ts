import ErrorsInterface from '@/interfaces/errors.interface'

export function validateForm(
    data: { [p: string]: string },
    setErrors: (errors: ErrorsInterface) => void
): boolean {
    let formErrors: ErrorsInterface = {}

    if (!data.first_name) formErrors.first_name = 'First name is required'
    if (!data.last_name) formErrors.last_name = 'Last name is required'
    if (!data.email) {
        formErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        formErrors.email = 'Invalid email address'
    }
    if (!data.title) formErrors.title = 'Title is required'
    if (!data.body) formErrors.body = 'Body is required'

    setErrors(formErrors)

    return Object.keys(formErrors).length === 0
}
