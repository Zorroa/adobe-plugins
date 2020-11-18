import renderer from "react-test-renderer"
import Thumbnail from "./Thumbnail"

const asset = {
  id: "23555",
  thumbnail: "http://helloworld.jpg",
}

describe("<Thumbnail/>", () => {
  it("should render properly", () => {
    // const wrapper = renderer.create(<Thumbnail asset={asset} />)
    // expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
