import React from "react";
import "jest-enzyme";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoLists from "../../components/TodoLists";
configure({ adapter: new Adapter() });

describe("Todo", () => {
  it("should test TodoLists component with default state of empty array", () => {
    const wrapper = shallow(<TodoLists todos={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should test TodoLists component with list of todos", () => {
    const wrapper = shallow(
      <TodoLists todos={["Read Newspaper", "Publish Article"]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
