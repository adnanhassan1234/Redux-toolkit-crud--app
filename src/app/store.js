import { configureStore } from '@reduxjs/toolkit'
import UserDetailsSlice from '../features/UserDetailsSlice'

export const store = configureStore({
  reducer: {
    app: UserDetailsSlice,
  },
})