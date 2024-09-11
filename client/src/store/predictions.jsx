import { create } from 'zustand';
import { GETPREDICTIONS } from '../data/requests';

const usePredictions = create((set) => ({
    predictions: [],
    loading: false,
    errorMessage: '',

    loadPredictions: async () => {
        set({ loading: true })
        try {
            const response = await GETPREDICTIONS('/predictions');
            console.log(response)
            const { odds } = await response.json();
            console.log(odds)
            set({ predictions: odds, loading: false });
        } catch (error) {
            console.error("Failed to load predictions:", error);
            set({ errorMessage: error, loading: false })
        } finally {
            set({ loading: false })
        }
    },

    // Get Predictions
    getPredictions: () => set((state) => state.predictions),

    // Add prediction
    updatePredictions: (prediction) =>
        set((state) => ({
            predictions: [...state.predictions, prediction],
        })),

    // Delete prediction using splice
    deletePrediction: (id) =>
        set((state) => {
            const index = state.predictions.findIndex((pred) => pred._id === id);
            if (index !== -1) {
                const updatedPredictions = [...state.predictions];
                updatedPredictions.splice(index, 1);
                return { predictions: updatedPredictions };
            }
            return state;
        }),
}));

export default usePredictions;
