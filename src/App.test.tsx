import App from "./App";
import Home from "./pages/Home";
import { shallow, ShallowWrapper } from "enzyme";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("renders home page", () => {
  expect(wrapper.find(Home).length).toEqual(1);
});
