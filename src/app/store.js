import { configureStore } from '@reduxjs/toolkit'
import UserDetailsSlice from '../features/UserDetailsSlice'
import LoginSlice from '../features/LoginSlice'

export const store = configureStore({
  reducer: {
    app: UserDetailsSlice,
    login: LoginSlice,
  },
})