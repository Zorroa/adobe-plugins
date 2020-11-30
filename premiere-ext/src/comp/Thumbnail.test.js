import renderer from "react-test-renderer"
import { BrowserRouter as Router } from "react-router-dom"
import Thumbnail from "./Thumbnail"

describe("<Thumbnail/>", () => {
  const asset = {
    id: "23555",
    thumbnail: "http://helloworld.jpg",
    media: {type: "video"}
  }
  it("should render properly", () => {
    const wrapper = renderer.create(
      <Router>
        <Thumbnail asset={asset} />
      </Router>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
