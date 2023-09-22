import { render } from "@testing-library/react";
import App from "../App";
import { describe } from "vitest";

describe("App", () => {
  it("renders App", () => {
    render(<App />);
  });
});
