import React from "react";
import "jest-enzyme";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTodo from "../../components/AddTodo";

configure({ adapter: new Adapter() });

describe("TodoItem", () => {
  it("should display todoitem with no error", () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should handle submit handler", () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("Form").simulate("submit");
    expect(handleAddTodo).toHaveBeenCalled();
  });
});
