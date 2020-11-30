import React, { useCallback, useState } from "react"
import { Button } from "react-bootstrap"
import { useDropzone } from "react-dropzone"

function Upload(props) {
  const [filename, setFilename] = useState("")
  const [status, setStatus] = useState("")
  const [base64Image, setBase64Image] = useState("")

  const onDrop = useCallback(
    (acceptFiles) => {
      if (acceptFiles.length > 1) {
        setStatus(
          "This feature only supports the sampling of one file.  Only the first will be used."
        )
      }
      const file = acceptFiles[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => setBase64Image(reader.result)
      reader.onerror = (error) => setStatus(error)

      setFilename(acceptFiles[0].name)
    },
    [setFilename, setStatus, setBase64Image]
  )

  // try:
  // post_files = []
  // for f in files:
  //     if isinstance(f, IOBase):
  //         post_files.append(
  //             ("files", (os.path.basename(f.name), f)))
  //     else:
  //         post_files.append(
  //             ("files", (os.path.basename(f), open(f, 'rb'))))

  // if body is not None:
  //     post_files.append(
  //         ("body", ("", to_json(body),
  //                   'application/json')))

  // return self.__handle_rsp(requests.post(
  //     self.get_url(path), headers=self.headers(content_type=""),
  //     verify=self.verify, files=post_files), json_rsp)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="container">
      {filename ? (
        <div>
          <label>Selected file:</label>&nbsp;&nbsp;
          <label className="selectionNotification"> {filename}</label>
        </div>
      ) : (
        <label>"Drag 'n' drop a file here to find similar assets"</label>
      )}
      <label className="notification">{status ? status : ""}</label>
      <div className="uploadBox" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select a file</p>
        )}
        <div className="text-center">
          {base64Image ? <img src={base64Image} alt="selected image" /> : ""}
        </div>
      </div>
      <hr />
      <div className="text-right">
        <Button className="btn btn-default btn-md btn btn-secondary">
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
          &nbsp;Submit
        </Button>
      </div>
    </div>
  )
}
export default Upload
