import renderer from "react-test-renderer"
import Navigation from "./Navigation"
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"

describe("<Navigation/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navigation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
