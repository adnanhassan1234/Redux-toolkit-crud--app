import { configureStore } from '@reduxjs/toolkit'
import UserDetailsSlice from '../features/UserDetailsSlice'
import LoginSlice from '../features/LoginSlice'
import CartSlice from '../features/CartSlice'
import ApiSlice from '../features/ApiSlice'

export const store = configureStore({
  reducer: {
    app: UserDetailsSlice,
    login: LoginSlice,
    cart: CartSlice,
    product: ApiSlice,
  },
})