import React, { useState, useEffect } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { downloadFile, getProxy, addToWorkspace } from "../Zapi"
import BackButton from "../comp/BackButton"
import BeatLoader from "react-spinners/BeatLoader"

function Video(props) {
  const { state } = props.location
  const history = props.history
  const [url, setUrl] = useState(null)
  const [mimeType, setMimeType] = useState(null)
  const [files] = useState(state.files)
  // const [id] = useState(state.id)

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
          <Button className="btn btn-dark btn-md" onClick={() => onAdd(files)}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
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
            &nbsp;&nbsp;Add to workspace
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">{displayType}</Col>
      </Row>
    </div>
  )
}

export default Video
