import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    email: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        unsetUser: (state) => {
            state.email = ""
            state.password = ""
        }
    }
})

export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer
