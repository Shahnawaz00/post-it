import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import viewAddPageReducer from '../features/addPage/addPageClassDispatchInitSlice'
import addPageClassReducer from '../features/addPage/addPageClassSlice'
import deletePostReducer from '../features/posts/deletePostSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    viewAddPage: viewAddPageReducer,
    addPageClass: addPageClassReducer,
    deletePost: deletePostReducer
  }
})