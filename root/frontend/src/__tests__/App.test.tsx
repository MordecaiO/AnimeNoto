import { render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter as Router } from "react-router-dom"; // Import Router

test("renders the App component", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
