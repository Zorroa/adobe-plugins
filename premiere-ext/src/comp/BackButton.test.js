import renderer from "react-test-renderer"
import BackButton from "./BackButton"

const history = { goBack: function () {} }

describe("<BackButton/>", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(<BackButton history={history} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
