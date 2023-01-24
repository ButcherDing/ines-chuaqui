import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalButton from "./modal-button.component";
import SERIES_DATA from "../../assets/series-data/series-data";

it("handles onClick", () => {
  const mockPiece = SERIES_DATA[0].pieces[0];
  const onClick = jest.fn();
  render(<ModalButton piece={mockPiece} />);
});
