import { render } from "@testing-library/react";
import SearchResultsView from "../pages/SearchResultsView/SearchResultsView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
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
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <SearchResultsView />
      </QueryClientProvider>
    </MemoryRouter>
  );
});
