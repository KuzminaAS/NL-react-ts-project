import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
    newProfile: object
    formSubmitted: boolean
}
const initialState: Profile = {
    newProfile: {},
    formSubmitted: false
}

const userSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        onChangeUser: {
            reducer: (state, action: PayloadAction<any>) => {
                state.newProfile = action.payload
        },
            prepare:  (name: string, value: any) => {
            return { payload: { [name]: value } }
        },
        },
        editProfile: (state, action) => {
            state.newProfile = action.payload,
            state.formSubmitted = true
        },
    }
})

const { actions, reducer } = userSlice;
export default reducer;
export const {onChangeUser, editProfile} = actions;
