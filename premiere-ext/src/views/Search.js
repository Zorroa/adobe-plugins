import React, { useState, useEffect, useCallback } from "react"
import { Button } from "react-bootstrap"
import Thumbnail from "../comp/Thumbnail"
import { downloadFile, getProxy, addToWorkspace, search, scroll } from "../Zapi"
import BeatLoader from "react-spinners/BeatLoader"

function Search(props) {
  const { params } = props.match
  const [showLoading, setShowLoading] = useState(true)
  const [assets, setAssets] = useState([])
  const [term, setTerm] = useState(params.term)
  const [hasMore, setHasMore] = useState(false)
  const [scrollId, setScrollId] = useState("")
  const [type, setType] = useState(params.type)

  const onAdd = async (files) => {
    const id = getProxy(files)["id"]

    const filePath = await downloadFile(id)

    addToWorkspace(filePath)
  }

  const loadMore = async () => {
    setShowLoading(true)

    try {
      const res = await scroll(scrollId)

      const data = res["data"]["scroll"]
      const total = assets.length + data.assets.length + 1
      setHasMore(total !== data.total)
      const newset = assets.concat(data.assets)
      setAssets(newset)
    } catch (err) {
      console.log(err)
    }
    setShowLoading(false)
  }

  const loadAssets = useCallback(async () => {
    setShowLoading(true)
    try {
      const res = await search(term, type)

      const data = res["data"]["search"]

      const total = assets.length + data.assets.length

      setAssets(data.assets)
      setScrollId(data.scrollId)
      setHasMore(total !== data.total)
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
    setShowLoading(false)
  }, [])

  useEffect(() => {
    setType(type)
    setTerm(term)
    loadAssets()
  }, [])

  return (
    <div className="container">
      <div className="grid">
        {assets.map((asset) => (
          <div key={asset.id} className="cell thumb-container">
            <Thumbnail asset={asset} />
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
      <div className="text-right">
        {hasMore ? (
          <Button className="btn btn-dark btn-md" onClick={loadMore}>
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Search
