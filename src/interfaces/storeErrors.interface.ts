import ErrorsInterface from '@/interfaces/errors.interface'

export default interface StoreErrorsInterface {
    errors: ErrorsInterface
    setErrors: (errors: ErrorsInterface) => void
}
