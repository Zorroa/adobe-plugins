import renderer from "react-test-renderer"
import SimilarButton from "./SimilarButton"

describe("<SimilarButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <SimilarButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
