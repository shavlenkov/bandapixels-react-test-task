import { create } from 'zustand'

import StoreErrorsInterface from '../interfaces/storeErrors.interface'

const useStoreErrors = create<StoreErrorsInterface>(set => ({
    errors: {
        first_name: '',
        last_name: '',
        email: '',
        title: '',
        body: ''
    },

    setErrors: errors => set({ errors })
}))

export default useStoreErrors
