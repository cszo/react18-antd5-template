import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

export interface ThemeState {
  themeColor: string
}

// use redux-persist？https://github.com/rt2zz/redux-persist
const initialState: ThemeState = JSON.parse(
  localStorage.getItem('theme') || '{"themeColor":"#247fff"}'
)

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload
      localStorage.setItem('theme', JSON.stringify({ themeColor: action.payload }))
    }
  }
})

export const { setColor } = themeSlice.actions

export const themeColor = (state: RootState) => state.theme.themeColor

export default themeSlice.reducer
