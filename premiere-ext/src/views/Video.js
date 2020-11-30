import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { downloadFile, getProxy, addToWorkspace } from "../Zapi"
import AddToWorkspace from '../comp/AddToWorkspaceButton'
import BackButton from "../comp/BackButton"
import BeatLoader from "react-spinners/BeatLoader"

function Video(props) {
  const { state } = props.location
  const history = props.history
  const [url, setUrl] = useState(null)
  const [mimeType, setMimeType] = useState(null)
  const [files] = useState(state.files)

  const onAdd = async (files) => {
    const id = getProxy(files)["id"]

    const res = await downloadFile(id)

    const filePath = res["data"]["file"]["filePath"]

    addToWorkspace(filePath)
  }

  useEffect(() => {
    async function download() {
      const asset = getProxy(files)
      try {
        const res = await downloadFile(asset["id"])

        const filePath = res["data"]["file"]["filePath"]

        setUrl(filePath)
        setMimeType(asset["mimetype"])
      } catch (err) {
        // TODO: handle error
        console.log(err)
      }
    }
    download()
  }, [files, setUrl, setMimeType])

  if (!url) {
    return <BeatLoader size={20} color={"#ffffff"} loading={true} />
  }

  let displayType

  if (mimeType === "image/jpeg") {
    displayType = <img src={url} alt="video thumbnail" />
  } else {
    displayType = <video controls autoPlay src={url} />
  }

  return (
    <div>
      <Row>
        <Col>
          <BackButton history={history} />
        </Col>
        <Col className="d-flex justify-content-end">
          <AddToWorkspace onpress={onAdd} files={files}/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">{displayType}</Col>
      </Row>
    </div>
  )
}

export default Video
