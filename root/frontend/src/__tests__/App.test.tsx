import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router

test("renders the App component", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
