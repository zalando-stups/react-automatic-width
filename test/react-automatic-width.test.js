import React from "react";
import ReactString from "react-dom/server";
import AutoWidth from "../src/react-automatic-width.jsx";
import domino from "domino";
import { expect } from "chai";

global.window = domino.createWindow("<h1>Hullo</h1>");

describe("react-automatic-width", () => {
  it("should set width property", () => {
    let dom = ReactString.renderToString(<AutoWidth><h1>Hello</h1></AutoWidth>);
    expect(/width="\d+"/gi.test(dom)).to.be.true;
  });
});
