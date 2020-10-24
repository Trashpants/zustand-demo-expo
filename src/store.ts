import createStore from 'zustand';
import { configurePersist } from "zustand-persist";
import AsyncStorage from '@react-native-community/async-storage';

const { persist, purge } = configurePersist({
    storage: AsyncStorage,
    rootKey: 'root',
});

const useStore = createStore(
    persist({
        key: 'auth', // required, child key of storage
    }, (set, get) => ({
        testValue: false,
        changeValue: () => {
            set((state) => ({ testValue: true }))
        }
    }))
);