import { createSlice } from '@reduxjs/toolkit'

export const MailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageOpen: false,
  },
  reducers: {
    selectMail: (state, action) =>{
        state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageOpen = true
    },
    closeSendMessage: (state) => {
        state.sendMessageOpen = false
    },
  },
})

export const {selectMail , openSendMessage, closeSendMessage, } = MailSlice.actions

export const selectSendMessageIsOpen =  (state) => state.mail.sendMessageOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default MailSlice.reducer