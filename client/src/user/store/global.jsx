import { create } from 'zustand'
import { GLOBAL_INITIALS } from '../intiials/storeintials'

const useGlobalUserStore = create((set) => ({

    ...structuredClone(GLOBAL_INITIALS),

    setProfileSection: () => set((state) => ({ isToggle: !state.isToggle })),
    setPasswordSection: () => set((state) => ({ isPassword: !state.isPassword })),
    setErrorMessage: (message) => set(() => ({ errorMessage: message })),
    setUpdate: (value) => set(() => ({ isUpdateSuccessful: value }))

}))

export default useGlobalUserStore;