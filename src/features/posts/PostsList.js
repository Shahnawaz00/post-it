import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostDispatched } from '../posts/deletePostSlice';
import {deletePostConfirm} from '../posts/postsSlice';

const PostsList = () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const deletePost = useSelector(state => state.deletePost)
  
  // checkbox checked array 
  const [checkedArray, setCheckedArray] = useState([]);

  const checkBoxClick = (e) => {

    if (e.target.checked === true) { 
      setCheckedArray(prevState => [...prevState, {value:e.target.id}]) 
    } if (e.target.checked === false) {
      setCheckedArray((prevState) => 
      prevState.filter((id) => id.value !== e.target.id )
      )
    }
  }
  // remove posts dispatch 
  
  // const onDeleteConfirm = () => {
    // console.log('')
    // if (checkedArray.length>0)  {
    //   const {value} = checkedArray.value
    //     const deleteArray = posts.filter((x) => x.id !== value)
    //     console.log(deleteArray)
    //   const myArrayFiltered = posts.filter(
    //     post => checkedArray.some(filter => filter.value === post.id)
    //     );
    //     dispatch (
    //       deletePostConfirm(value)
    //     )
      
  //   } else alert('select a post')
    
  // }
  const onDeleteConfirm = () => {
    if (checkedArray.length > 0) {
      dispatch(deletePostConfirm(checkedArray))
      dispatch (
        deletePostDispatched(false)
    )
    }  else alert('select a post')
    
  }
  // delete post class changes 


  const closeDeletePost = () => {
    if (deletePost.value !== false ) {
        dispatch (
            deletePostDispatched(false)
        )
    }
   }
 


  return (
    <div >
      <div className={deletePost.value?'deleteBtnSection' : 'removeDeleteBtnSection ' } >
        <button className={deletePost.value?'deleteConfirmBtn': 'removeDeleteConfirmBtn'} onClick={onDeleteConfirm} >
        Delete
        </button>
        <button className={deletePost.value?'deleteCancelBtn': 'removeDeleteCancelBtn'} onClick={closeDeletePost} >
        Cancel
        </button>
      </div>
      
      <div className="postsSection"  >
      { posts.map(post => (
            <div className={deletePost.value? 'eachPost shake' : 'eachPost'} key={post.id}>
              <h3>{post.name}</h3>
              <p> {post.description} </p>
              <div className={deletePost.value? 'showCheckbox' : 'hideCheckbox'} >
                <label className='checkboxLabel'>
                  <input className='eachPostCheckbox' type="checkbox" id={post.id} onClick={checkBoxClick}  />
                  <span className="newCheckbox"></span>
                </label>
              </div>
            </div>
        )) }
      </div>
      
    </div>
  )
}
export default PostsList