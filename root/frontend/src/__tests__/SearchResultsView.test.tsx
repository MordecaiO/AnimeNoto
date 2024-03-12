import { render } from "@testing-library/react";
import SearchResultsView from "../pages/SearchResultsView/SearchResultsView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter as Router } from "react-router-dom";
import { AnimeProps, AnimeListProps } from "../vite-env";
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
        <SearchResultsView
          lists={[]}
          handleAddAnime={function (
            _targetListId: number,
            _targetAnime: AnimeProps,
            _currentLists: AnimeListProps[]
          ): void {
            throw new Error("Function not implemented.");
          }}
          handleDeleteAnime={function (
            _targetListId: number,
            _targetAnime: AnimeProps,
            _currLists: AnimeListProps[]
          ): void {
            throw new Error("Function not implemented.");
          }}
          isAnimeInList={function (
            _targetAnime: AnimeProps,
            _targetList: AnimeListProps
          ): boolean {
            throw new Error("Function not implemented.");
          }}
        />
      </QueryClientProvider>
    </Router>
  );
});
