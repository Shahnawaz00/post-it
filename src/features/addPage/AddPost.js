import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {addPageClassChanged} from './addPageClassSlice';
import { addNewPost } from '../posts/postsSlice';

const AddPost = () => {

  // close add page dispatch on close button

  const viewAddPage = useSelector(state => state.viewAddPage);
  const addPageClass = useSelector(state => state.addPageClass.value);

  const dispatch = useDispatch()

  const closeAddPage = () => {
    if (addPageClass.value !== 'closeAddPage') {
      dispatch(
        addPageClassChanged({
            value: 'closeAddPage'
        })
    )
    }
  }
    // close add page dispatch on esc button
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        if (addPageClass.value !== 'closeAddPage') {
          dispatch(
            addPageClassChanged({
                value: 'closeAddPage'
            })
        )
        }
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  // form input states 
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const onNameChange = (e) => setName(e.target.value)
  const onDescriptionChange = (e) => setDescription(e.target.value)

  // add new post dispatch 
  const onFormSubmit = (e) => {
    if (name && description) {
      dispatch(
        addNewPost({
          id: nanoid(),
          name,
          description
        })
      )
      setName('')
      setDescription('')
    }
  }

  return (
    <div className={viewAddPage.value? addPageClass.value : 'closeAddPageInit'} >
      <div className='addPageHeader' >
        <h3 className='addPageTitle' >Add Post</h3>
        <button className='addPageCloseBtn' onClick={closeAddPage} > close x </button>
      </div>
      <form className='addForm'  >
        <label htmlFor="postName">Post:</label>
        <input className='addFormInputs' type="text" name='postName'
         placeholder='Go Hiking' onChange={onNameChange} value={name} />
        <label htmlFor="postDescription">Description:</label>
        <textarea className='addFormInputs' name="postDescription" id="postDescription" 
        cols="30" rows="10" onChange={onDescriptionChange} value={description}></textarea>
        <button onClick={onFormSubmit} className='addFormBtn' type='button' >Add Post</button>
      </form>
    </div>
  )
}

export default AddPost