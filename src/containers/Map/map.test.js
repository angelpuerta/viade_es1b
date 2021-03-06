import React from "react";
import { render, queryByTestId, queryById } from "@testing-library/react";
import Map from "./map.component";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  const { container, debug } = render(<Map />);
  wrapper = container;
  //debug();
});

describe("Map Page Render", () => {
  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  })
    ;
  test("renders all components", () => {
    expect(queryByTestId(wrapper, "map-title")).not.toBeNull();
    expect(queryByTestId(wrapper, "map-routes-list")).not.toBeNull();
    expect(wrapper.querySelector("#map")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<Map />);
    expect(wrappers).toMatchSnapshot();
  });
});
