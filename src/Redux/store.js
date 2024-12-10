import { configureStore } from "@reduxjs/toolkit";
import nextSlice from './nextSlice'


export const store = configureStore({
    reducer:{
        next: nextSlice
    }
})
