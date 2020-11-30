import renderer from "react-test-renderer"
import SearchButton from "./SearchButton"

describe("<SearchButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <SearchButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
