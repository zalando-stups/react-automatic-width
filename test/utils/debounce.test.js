import chai, { expect } from "chai";
import sinon from "sinon";
import spies from "chai-spies";

import debounce from "../../src/utils/debounce";

describe("utils/debounce", () => {
  chai.use(spies);
  let clock, spy;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    spy = chai.spy(function() {});
  });

  afterEach(() => {
    clock.restore();
  });

  it("Should block any calls before wait time is not finished", () => {
    const debounced = debounce(spy, 100, true);
    debounced(); // First call

    clock.tick(50);
    debounced(); //should not call

    clock.tick(100);
    debounced(); //should call again

    expect(spy).to.have.been.called.twice;
  });

  it("Should delay the call if not immediate", () => {
    const debounced = debounce(spy, 100);
    debounced(); // Should not call yet

    clock.tick(101);
    debounced(); //Call

    expect(spy).to.have.been.called.once;
  });
});
