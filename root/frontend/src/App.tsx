import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResultsView from "./pages/SearchResultsView/SearchResultsView.tsx";
import { useLists } from "./hooks/useLists.tsx";
import { animeLists } from "./pages/MultiListView/testDB.ts";
import MultiListView from "./pages/MultiListView/MultiListView.tsx";
import DetailedListView from "./pages/DetailedListView/DetailedListView.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [lists, handleAddAnime, handleDeleteAnime, isAnimeInList] =
    useLists(animeLists);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <QueryClientProvider client={queryClient}>
          <SearchResultsView
            lists={lists}
            handleAddAnime={handleAddAnime}
            handleDeleteAnime={handleDeleteAnime}
            isAnimeInList={isAnimeInList}
          />
        </QueryClientProvider>
      ),
    },
    {
      path: "lists",
      element: <MultiListView />,
    },

    {
      path: "lists/:listName",
      element: <DetailedListView />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
