import { render } from "@testing-library/react";
import SearchResultsView from "../pages/SearchResultsView/SearchResultsView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter as Router } from "react-router-dom";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

test("render the SearchResultsView page", () => {
  render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchResultsView />
      </QueryClientProvider>
    </Router>
  );
});
