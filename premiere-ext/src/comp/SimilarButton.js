import React from 'react'

function SimilarButton(props) {
    
  const callback = props.onpress

  return (
    <div className="thumb-button" onClick={callback}>
        <svg viewBox="0 0 20 20" height="20" color="#ffffff">
            <path fill="currentColor" d="M12 0a8 8 0 013.293 15.293A8 8 0 114.708 4.707 8 8 0 0112 0zM4.014 7.516l-.106.096a6 6 0 108.577 8.374 8 8 0 01-8.47-8.47zM8 6a6 6 0 00-1.743.257 6 6 0 007.486 7.486A6 6 0 008 6zm4-4a5.985 5.985 0 00-4.485 2.014 8 8 0 018.47 8.47A6 6 0 0012 2z"></path>
        </svg>
  </div>
  )
}

export default SimilarButton
