import React from 'react'
import { Button } from "react-bootstrap"

function MoreButton(props) {
    
  const callback = props.onpress

  return (
    <Button className="btn btn-dark btn-md" onClick={callback}>
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      className="bi bi-three-dots"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  </Button>
  )
}

export default MoreButton
