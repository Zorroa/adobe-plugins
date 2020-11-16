import renderer from "react-test-renderer"
import App from "./App"

describe("<App/>", () => {
  it("renders without crashing", () => {
    const wrapper = renderer.create(<App />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
