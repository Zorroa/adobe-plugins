import renderer from "react-test-renderer"
import DownloadButton from "./DownloadButton"

describe("<DownloadButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <DownloadButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
