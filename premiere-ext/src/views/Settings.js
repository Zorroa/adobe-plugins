import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import BackButton from "../comp/BackButton"
import * as zapi from "../Zapi"

function Settings(props) {
  const history = props.history
  const [zapiKey, setZapiKey] = useState("")
  const [projectId, setProjectId] = useState("")
  const [zapiServer, setZapiServer] = useState("https://api.zvi.zorroa.com")
  const [credSet, setCredSet] = useState(false)

  useEffect(() => {
    const auth = async () => {
      let zKey = ""
      try {
        const res = await zapi.authorize()

        const { userAuthorization } = res["data"]

        const zServer = decodeURIComponent(userAuthorization.zapiServer)

        if (zServer !== "") {
          zKey = "*****************"
          setCredSet(true)
        }
        setProjectId(userAuthorization.projectId)
        setZapiServer(zServer)
        setZapiKey(zKey)
      } catch (err) {
        // TODO: handle error
        console.log(err)
      }
    }
    auth()
  }, [setProjectId, setZapiServer, setZapiKey])

  const onClearCache = async (e) => {
    try {
      const res = await zapi.clearCache()
      const authFile = res["data"]["clearCache"]["authFile"]

      if (authFile) {
        setZapiKey("")
        setProjectId("")
        setZapiServer("https://api.zvi.zorroa.com")
        setCredSet(false)
      }
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
  }

  const onUploadFile = async (event) => {
    try {
      setCredSet(false)

      const res = await zapi.onUploadAuth(
        encodeURIComponent(zapiKey),
        encodeURIComponent(projectId),
        encodeURIComponent(zapiServer)
      )

      if (!res["data"].hasOwnProperty("errors")) {
        setCredSet(true)
      }
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
  }

  let statusElem = <div></div>
  if (credSet) {
    statusElem = <label id="setStatus">Credentials Set</label>
  }

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col-md-10">
        <BackButton history={history} />
        <form method="post" action="#" id="#">
          <div className="form-group">
            {statusElem}
            <br />
            <label>Project ID </label>
            <input
              type="text"
              name="projectid"
              className="form-control"
              onChange={(e) => setProjectId(e.target.value)}
              value={projectId}
            />
            <br />
            <label>Server </label>
            <input
              type="text"
              name="server"
              className="form-control"
              onChange={(e) => setZapiServer(e.target.value)}
              value={zapiServer}
            />
            <br />
            <label>Paste your apikey </label>
            <input
              type="password"
              name="apikey"
              className="form-control"
              onChange={(e) => setZapiKey(e.target.value)}
              value={zapiKey}
            />
          </div>
          <div>
            <button
              width="100%"
              type="button"
              className="btn btn-primary"
              onClick={onUploadFile.bind(this)}
            >
              Submit
            </button>
          </div>
          <br />
          <br />
          <Button
            className="btn btn-default btn-md btn btn-secondary"
            onClick={onClearCache.bind(this)}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 22 22"
              className="bi bi-x-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fillRule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            &nbsp;Clear Cache
          </Button>
          <br />
          <span className="note">
            *This clears your apikey and files downloaded from ZMLP.
          </span>
        </form>
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Settings
