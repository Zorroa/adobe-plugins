import renderer from "react-test-renderer"
import AddToWorkspaceButton from "./AddToWorkspaceButton"

describe("<AddToWorkspaceButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <AddToWorkspaceButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
