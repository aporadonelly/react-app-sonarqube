import React from "react";
import "jest-enzyme";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoItem from "../../components/TodoItem";

configure({ adapter: new Adapter() });

describe("TodoItem", () => {
  it("should display todoitem with no error", () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
