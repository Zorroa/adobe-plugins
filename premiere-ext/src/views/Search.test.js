import renderer from "react-test-renderer"
import Search from "./Search"

describe("<Navigation/>", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(
      <Search match={{ params: { term: "1", type: "1" } }} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
