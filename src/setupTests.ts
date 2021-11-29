import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { JSDOM } from "jsdom";

Enzyme.configure({ adapter: new Adapter() });

export const dom = new JSDOM(
  `
  <!DOCTYPE html>
    <head></head>
    <body>
      <div id="root">
      </div>
    </body>
  </html>
  `,
  {
    pretendToBeVisual: true,
  }
);
