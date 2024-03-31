import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResultsView from "./pages/SearchResultsView/SearchResultsView.tsx";
import { useLists } from "./hooks/useLists.tsx";
import { animeLists } from "./pages/MultiListView/testDB.ts";
import MultiListView from "./pages/MultiListView/MultiListView.tsx";
import DetailedListView from "./pages/DetailedListView/DetailedListView.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const queryClient = new QueryClient();
const ProtectedSearchResultsView =
  withAuthenticationRequired(SearchResultsView);
const ProtectedMultiListView = withAuthenticationRequired(MultiListView);
const ProtectedDetailedListView = withAuthenticationRequired(DetailedListView);
function App() {
  const [
    lists,
    handleAddAnime,
    handleDeleteAnime,
    isAnimeInList,
    handleCreateList,
    handleDeleteList,
    handleEditList,
  ] = useLists(animeLists);

  const router = createHashRouter([
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
      element: (
        <ProtectedMultiListView
          lists={lists}
          handleDeleteList={handleDeleteList}
          handleCreateList={handleCreateList}
          handleEditList={handleEditList}
        />
      ),
    },

    {
      path: "lists/:listName",
      element: (
        <ProtectedDetailedListView
          lists={lists}
          handleAddAnime={handleAddAnime}
          handleDeleteAnime={handleDeleteAnime}
          isAnimeInList={isAnimeInList}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
