import React, { useState } from "react"
import {
  Row,
  Form,
  FormControl,
  Button,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"

function Navigation(props) {
  const history = useHistory()

  const [term, setTerm] = useState("")
  const [type, setType] = useState("all")

  const onSearch = (evt) => {
    history.push("/search/" + term + "/" + type)
  }
  const onUpload = (evt) => {
    history.push("/upload")
  }
  const onSettings = (evt) => {
    history.push("/settings")
  }

  return (
    <div>
      <Row>
        <div className="col-6">
          <nav className="navbar navbar-expand-sm" expand="sm">
            <Form inline>
              <InputGroup>
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                  onSelect={(e) => setType(e)}
                >
                  <Dropdown.Item id="all" eventKey="all">
                    All
                  </Dropdown.Item>
                  <Dropdown.Item id="video" eventKey="video">
                    Videos
                  </Dropdown.Item>
                  <Dropdown.Item id="images" eventKey="image">
                    Images
                  </Dropdown.Item>
                  <Dropdown.Item id="documents" eventKey="document">
                    Documents
                  </Dropdown.Item>
                </DropdownButton>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setTerm(e.target.value)}
                />
              </InputGroup>
            </Form>
            <Button
              id="btnSearch"
              className="btn btn-default btn-md"
              onClick={onSearch}
            >
              Search{" "}
            </Button>
          </nav>
        </div>
        <div className="col-3 text-right">
          <Button
            type="button"
            id="settingsButton"
            onClick={onUpload}
            className="btn btn-default btn-md "
          >
            <span id="settingsIcon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 18 18"
                className="bi bi-cloud-upload-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
                />
              </svg>
              Upload
            </span>
          </Button>
        </div>
        <div className="col-3 text-right">
          <Button
            type="button"
            id="settingsButton"
            onClick={onSettings}
            className="btn btn-default btn-md "
          >
            <span id="settingsIcon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 18 18"
                className="bi bi-gear-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"
                />
              </svg>{" "}
              Settings
            </span>
          </Button>
        </div>
      </Row>
      <hr />
    </div>
  )
}

export default Navigation
