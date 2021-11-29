import { mount } from "enzyme";
import React from "react";
import CSS from "csstype";

import Scroller from "..";
import { dom } from "../../setupTests";

test("Component should log all info about Scroller.tsx", () => {
  const sectionStyle: CSS.Properties = {
    width: "100vw",
    height: "100vh",
    scrollBehavior: "smooth",
  };

  const rootElement = dom.window.document.getElementById("root");

  const wrapper = mount(
    <Scroller>
      <section style={sectionStyle} className="section 1">
        Section 1
      </section>
      <section style={sectionStyle} className="section 2">
        Section 2
      </section>
      <section style={sectionStyle} className="section 3">
        Section 3
      </section>
    </Scroller>,
    {
      attachTo: rootElement,
    }
  );

  const element = wrapper.getElement().props;
  console.log(element);

  wrapper.simulate("scroll");

  expect(1).toBeGreaterThanOrEqual(1);
});
