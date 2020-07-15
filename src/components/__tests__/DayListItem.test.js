import React from "react";

import { render, cleanup } from "@testing-library/react";

import DayListItem from "components/DayListItem";

afterEach(cleanup);

it("renders without crashing", () => {
  const getSpotsForDay = jest.fn(() => { return 2 });
  render(<DayListItem getSpotsForDay={getSpotsForDay} />);
});

it("renders 'no spots remaining' when there are 0 spots", () => {
  const getSpotsForDay = jest.fn(() => { return 0 });
  const { getByText } = render(<DayListItem name="Monday" spots={0} getSpotsForDay={getSpotsForDay} />);
  expect(getByText("no spots remaining")).toBeInTheDocument();
});

it("renders '1 spot remaining' when there is 1 spot", () => {
  const getSpotsForDay = jest.fn(() => { return 1 });
  const { getByText } = render(<DayListItem name="Monday" spots={1} getSpotsForDay={getSpotsForDay} />);
  expect(getByText("1 spot remaining")).toBeInTheDocument();
});

it("renders '2 spots remaining' when there are 2 spots", () => {
  const getSpotsForDay = jest.fn(() => { return 2 });
  const { getByText } = render(<DayListItem name="Monday" spots={2} getSpotsForDay={getSpotsForDay}/>);
  expect(getByText("2 spots remaining")).toBeInTheDocument();
});