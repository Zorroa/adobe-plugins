import { useState } from "react"
import { Link } from "react-router-dom"

function Thumbnail(props) {
  const [asset] = useState(props.asset)

  let assetType

  switch (asset.media.type) {
    case "image":
      assetType = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-file-earmark-image-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 0a2 2 0 0 0-2 2v10.293l2.87-2.87a1 1 0 0 1 1.222-.15l1.77 1.06L9.75 7.69a1 1 0 0 1 1.52-.126L14 10.293V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0H4zM2 14v-.293l3.578-3.577 2.165 1.299.396.237.268-.375 2.157-3.02L14 11.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM9.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      )
      break
    case "video":
      assetType = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-file-earmark-play-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z"
          />
        </svg>
      )
      break
    case "document":
      assetType = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-file-earmark-text-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      )
      break
    default:
      assetType = (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-file-earmark-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0H4zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"
          />
        </svg>
      )
  }

  return (
    <Link className="video-link" to={{ pathname: "/video", state: asset }}>
      <img
        key={asset.id}
        id={asset.id}
        src={asset.thumbnail}
        className="responsive-image"
        alt={asset.thumbnail}
      />
      <div className="thumbnail-type">{assetType}</div>
    </Link>
  )
}

export default Thumbnail
