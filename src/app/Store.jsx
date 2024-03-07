import { configureStore } from '@reduxjs/toolkit'
import mailReducer from "../feature/MailSlice"
import useReducer from "../feature/UserSlice"

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: useReducer,
  }
})