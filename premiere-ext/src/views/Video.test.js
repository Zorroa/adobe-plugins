import renderer from "react-test-renderer"
import Video from "./Video"

describe("<Video/>", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Video location={{ state: {} }} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
