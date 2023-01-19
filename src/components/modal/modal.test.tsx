import { render } from "@testing-library/react";
import { mockComponent } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Modal from "./modal.component";
import { SERIES_DATA } from "../../assets/series-data/series-data";
import { renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useKeyPress } from "../../store/hooks/event-listeners.hooks";

const mockHandler = jest.fn(() => {});

const mockPiece = SERIES_DATA[0].pieces[0];

test("increment", () => {
  render(
    <Provider store={store}>
      <Modal closeModalHandler={mockHandler} piece={mockPiece} />
    </Provider>
  );
});

// describe("useKeyPress", () => {
//   it("should listen for the keypress we pass as an arg", () => {
//     const keyPressX = renderHook(() => useKeyPress("x"));
//     userEvent.keyboard("x");
//     expect(keyPressX.result.current).toBeFalsy();
//   });
// });
