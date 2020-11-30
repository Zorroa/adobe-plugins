import renderer from "react-test-renderer"
import SettingsButton from "./SettingsButton"

describe("<SettingsButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(
        <SettingsButton onpress={()=>{}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
