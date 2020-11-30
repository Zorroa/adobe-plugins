import renderer from "react-test-renderer"
import MoreButton from "./MoreButton"

describe("<MoreButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <MoreButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
