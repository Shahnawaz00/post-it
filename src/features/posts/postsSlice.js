import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'First Post!', description: 'Hello!' },
  { id: '2', name: ' hello Second Post', description: 'More text' },
  { id: '3', name: ' hello Second Post', description: 'More text' },
  { id: '4', name: 'First Post!', description: 'Hello!' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost(state, action) {
      console.log(state.push(action.payload))
    },
    deletePostConfirm(state, action) {
      console.log(action.payload)
      return state.filter(
            post => !action.payload.find(filter => filter.value === post.id)
            );
      // return state.filter((post) => post.id !== action.payload)
    }
  }
})

export const {addNewPost, deletePostConfirm} = postsSlice.actions

export default postsSlice.reducer