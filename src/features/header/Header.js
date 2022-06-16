import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GrAdd} from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'
import {addPageClassChanged} from '../addPage/addPageClassSlice';
import { addPageClassDispatched } from '../addPage/addPageClassDispatchInitSlice';
import { deletePostDispatched } from '../posts/deletePostSlice';

const Header = () => {

  const dispatch = useDispatch();
  //   add page dispatch 
  const addPageClass = useSelector(state => state.addPageClass);
  const openAddPage = () => {
    if (addPageClass.value !== 'openAddPage') {
        dispatch(
            addPageClassDispatched({
                value: true
            })
        )
        dispatch(
            addPageClassChanged({
                value: 'openAddPage'
            })
        )
    }
  }
   //   delete page dispatch 
   const deletePost = useSelector(state => state.deletePost)
   const openDeletePost = () => {
    if (deletePost.value !== true ) {
        dispatch (
            deletePostDispatched(true)
        )
    }
   }
  


  return (
    <div className='headerMain' >
        <header>
            <h1 className='headerTitle' >
                POST-IT 
            </h1>
        </header>
        {/* buttons */}
        <div c >
            <button className='addButton' onClick={openAddPage} >
                <GrAdd size={24} className='addIcon'/>
            </button>
            <button className='deleteButton' onClick={openDeletePost}> 
                <AiFillDelete size={24} />
            </button>



              

        </div>
    </div>
  )
}

export default Header