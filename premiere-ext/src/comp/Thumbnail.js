import { useState } from "react"
import { Link } from "react-router-dom"

function Thumbnail(props) {
  const [asset] = useState(props.asset)

  return (
    <Link className="video-link" to={{ pathname: "/video", state: asset }}>
      <img
        key={asset.id}
        id={asset.id}
        src={asset.thumbnail}
        className="responsive-image"
        alt={asset.thumbnail}
      />
    </Link>
  )
}

export default Thumbnail
