import React, { useState, useEffect, useCallback } from "react"
import Thumbnail from "../comp/Thumbnail"
import DownloadButton from "../comp/DownloadButton"
import SimilarButton from "../comp/SimilarButton"
import MoreButton from "../comp/MoreButton"
import {
  downloadFile,
  getProxy,
  addToWorkspace,
  search,
  scroll,
  similar,
} from "../Zapi"
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

    const res = await downloadFile(id)

    const filePath = res["data"]["file"]["filePath"]

    addToWorkspace(filePath)
  }

  const onSimilar = async (hash) => {
    setShowLoading(true)
    try {
      const res = await similar(hash)

      const data = res["data"]["similar"]
      const total = assets.length + data.assets.length + 1

      setScrollId(data.scrollId)
      setHasMore(total !== data.total)
      setAssets([...data.assets])
    } catch (err) {
      console.log(err)
    }
    setShowLoading(false)
  }

  const loadMore = async () => {
    setShowLoading(true)
    try {
      const res = await scroll(scrollId)

      const data = res["data"]["scroll"]
      const total = assets.length + data.assets.length + 1

      setHasMore(total !== data.total)
      setAssets([...data.assets, ...assets])
    } catch (err) {
      console.log(err)
    }
    setShowLoading(false)
  }

  const loadAssets = useCallback(async (term, type) => {
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
    loadAssets(term, type)
  }, [term, type, setTerm, setType, loadAssets])

  return (
    <div>
      <div className="gallery" id="gallery">
        {assets.map((asset) => (
          <div key={asset.id} className="mb-3 pics animation all 2">
            <div className="thumb-buttons">
              <SimilarButton
                onpress={() =>
                  onSimilar(asset.analysis.zviImageSimilarity.simhash)
                }
              />
              <DownloadButton onpress={() => onAdd(asset.files)} />
            </div>
            <Thumbnail asset={asset} />
          </div>
        ))}
      </div>
      <BeatLoader size={20} color={"#ffffff"} loading={showLoading} />
      <div className="text-right">
        {hasMore ? <MoreButton onpress={loadMore} /> : <div></div>}
      </div>
    </div>
  )
}

export default Search
