import { renderHook, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useKeyPress } from "./event-listeners.hooks";

describe("useKeyPress", () => {
  it("should go back to false after keypress", () => {
    const keyPressX = renderHook(() => useKeyPress("x"));
    console.log(keyPressX);
    userEvent.keyboard("x");
    fireEvent.keyDown(document);
    expect(keyPressX.result.current).toBeFalsy();
  });

  it("should register true on keydown and false on keyup", () => {
    const keyPressX = renderHook(() => useKeyPress("x"));
    console.log(keyPressX);
    // userEvent.keyboard("x");
    fireEvent.keyDown(window, { key: "x", code: "KeyX" });

    expect(keyPressX.result.current).toBeFalsy();
  });
});
