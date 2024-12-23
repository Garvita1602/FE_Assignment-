import { create } from 'zustand';

export const useFormStore = create((set) => ({
    formData: {
        personalInfo: { name: '', email: '' },
        address: { street: '', city: '', country: '' },
        preferences: { receiveEmails: false },
    },
    updateFormData: (section, data) =>
        set((state) => ({
            formData: {
                ...state.formData,
                [section]: { ...state.formData[section], ...data },
            },
        })),
}));
