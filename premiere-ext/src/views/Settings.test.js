import renderer from "react-test-renderer"
import Settings from "./Settings"

describe("<Settings/>", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Settings history={{}} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
