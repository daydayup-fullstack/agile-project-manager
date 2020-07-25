import React from 'react'
//normally, we import this in our 
//root component file
import ReactDOM from 'react-dom'
import './Modal.css'



const Modal = props => {
    return ReactDOM.createPortal(
        //two arguments:
        //1. some block of jsx
        //! the outer gray background
        <div onClick={props.onDismiss} className='Modal'>
            <div onClick={(e) => e.stopPropagation()} className='Modal__container'>
                {/* content */}
                <div className='Modal__text'>{props.title}</div>
                <div className='Modal__text'>
                    {/* ! props.content passed here is a function which has been invoked*/}
                    {/* this function returns some jsx */}
                    {props.content}
                </div>
                <div className='Modal__text'>
                    {/* use Fragment here, or semantic UI will error */}
                    {props.actions}
                </div>
            </div>
        </div>,
        //2. a reference to the element 
        //that I want to render this portal into.
        //but not directly attach to #id in the body, or it will replace everything
        //so we create other elements in index.html with different id
        document.querySelector('#modal')
    )
}

export default Modal