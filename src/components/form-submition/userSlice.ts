import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
    profile: {
        name: string,
        email: string,
        theme: string
        message: string
    },
    formSubmitted: boolean
}
const initialState: Profile = {
    profile: {
        name: '',
        email: '',
        theme: '',
        message: ''
    },
    formSubmitted: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onChangeUser: {
            reducer: (state, action: PayloadAction<any>) => {
                state.profile = action.payload
        },
            prepare:  (name: string, value: any) => {
            return { payload: { [name]: value } }
        },
        },
        createProfile: (state, action) => {
            state.profile = action.payload,
            state.formSubmitted = true
        },
        // resetForm: state => {
        //     state.profile = initialState.profile
        // }
    }
})

const { actions, reducer } = userSlice;
export default reducer;
export const {onChangeUser, createProfile} = actions;
