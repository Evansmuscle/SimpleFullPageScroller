import React from "react";
import Example from "..";
import renderer from "react-test-renderer";

test("Component should show Hello World as text", () => {
  const component = renderer.create(<Example text={"World"} />);
  const testInstance = component.root;

  expect(testInstance.findByType(Example).props.text).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
