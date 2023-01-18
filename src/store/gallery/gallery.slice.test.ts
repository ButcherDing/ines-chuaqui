import { render, screen, fireEvent } from "@testing-library/react";

// const mockOnChangeHandler = jest.fn();

// describe("GetSeriesDataAsync", () => {
//   it("should be able to type in input field", async () => {
//     const inputElement: HTMLInputElement = screen.getByLabelText(/Email/i);
//     // arguably the right way of doing this because it more accurately simulates user actions, unsure why this doesn't actually work - it's a type event, we are typing into the input element (or so it seems, hard to read console logs), rather than just changing the value arbitrarily as we do below. Nevertheless fireEvent.change seems to be the common method for testing input elements.
//     // userEvent.type(inputElement, "joe@email.com");
//     fireEvent.change(inputElement, { target: { value: "joe@email.com" } });
//     expect(inputElement.value).toBe("joe@email.com");
//   });
// });
