import { render, screen } from "@testing-library/react";
import { SERIES_DATA } from "../../assets/series-data/series-data";
import SeriesRow from "./series-row.component";
import { store } from "../../store/store";
import { Provider } from "react-redux";

const MOCK_SERIES = SERIES_DATA[0];

const MockSeriesRow = () => {
  return (
    <Provider store={store}>
      <SeriesRow key={`gallery` + MOCK_SERIES.title} series={MOCK_SERIES} />
    </Provider>
  );
};

it("does a thing", () => {});

it("should render the series title passed in from series prop", async () => {
  render(<MockSeriesRow />);
  const headingElement = screen.getByText(MOCK_SERIES.title);
  expect(headingElement).toBeInTheDocument;
});
