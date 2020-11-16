import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { downloadFile, getProxy, addToWorkspace, search } from "../Zapi"
import BeatLoader from "react-spinners/BeatLoader"

function Search(props) {
  const { params } = props.match
  const [showLoading, setShowLoading] = useState(true)
  const [assets, setAssets] = useState([])
  const [term, setTerm] = useState(params.term)
  const [type, setType] = useState(params.type)

  useEffect(() => {
    setType(type)
    setTerm(term)

    loadAssets(term, type)
  }, [term, type, setTerm, setType])

  const onAdd = async (files) => {
    const id = getProxy(files)["id"]

    const filePath = await downloadFile(id)

    addToWorkspace(filePath)
  }

  const loadAssets = async (term, type) => {
    setShowLoading(true)

    try {
      const res = await search(term, type)

      const assets = res["data"]["search"]["assets"]

      setAssets(assets)
      setShowLoading(false)
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className="grid">
        {assets.map((asset) => (
          <div key={asset.id} className="cell thumb-container">
            <Link
              className="video-link"
              to={{ pathname: "/video", state: asset }}
            >
              <img
                key={asset.id}
                id={asset.id}
                src={asset.thumbnail}
                className="responsive-image"
                alt={asset.thumbnail}
              />
            </Link>
            <div className="thumb-buttons">
              <div
                className="thumb-button"
                id={asset.id}
                data={asset.files}
                onClick={() => onAdd(asset.files)}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-download"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BeatLoader size={20} color={"#ffffff"} loading={showLoading} />
    </div>
  )
}

export default Search
