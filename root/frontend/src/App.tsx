import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResultsView from "./pages/SearchResultsView/SearchResultsView.tsx";
import MultiListView from "./pages/MultiListView/MultiListView.tsx";
import DetailedListView from "./pages/DetailedListView/DetailedListView.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage.tsx";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const queryClient = new QueryClient();
const ProtectedSearchResultsView =
  withAuthenticationRequired(SearchResultsView);
const ProtectedMultiListView = withAuthenticationRequired(MultiListView);
const ProtectedDetailedListView = withAuthenticationRequired(DetailedListView);

function App() {
  const router = createHashRouter([
    {
      path: "search",
      element: (
        <QueryClientProvider client={queryClient}>
          <ProtectedSearchResultsView />
        </QueryClientProvider>
      ),
    },
    {
      path: "lists",
      element: (
        <QueryClientProvider client={queryClient}>
          <ProtectedMultiListView />
        </QueryClientProvider>
      ),
    },

    {
      path: "lists/:listName",
      element: <ProtectedDetailedListView />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
