import React, { useState, useEffect } from "react"
import Thumbnail from "../comp/Thumbnail"
import DownloadButton from "../comp/DownloadButton"
import SimilarButton from "../comp/SimilarButton"
import {
  downloadFile,
  getProxy,
  addToWorkspace,
  search,
  similar,
} from "../Zapi"
import BeatLoader from "react-spinners/BeatLoader"

function Search(props) {
  const { params } = props.match
  const [showLoading, setShowLoading] = useState(true)
  const [assets, setAssets] = useState([])
  const [term, setTerm] = useState(params.term)
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

      setAssets([...data.assets])
    } catch (err) {
      console.log(err)
    }
    setShowLoading(false)
  }

  useEffect(() => {
    setType(type)
    setTerm(term)

    const loadAssets = async () => {
      setShowLoading(true)

      try {
        const res = await search(term, type)

        const data = res["data"]["search"]

        setAssets(data.assets)
      } catch (err) {
        // TODO: handle error
        console.log(err)
      }

      setShowLoading(false)
    }
    loadAssets()
  }, [term, type, setTerm, setType, assets])

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
    </div>
  )
}

export default Search
