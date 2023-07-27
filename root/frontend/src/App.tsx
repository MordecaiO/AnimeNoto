import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchResultsView } from "./components/SearchResultsView/SearchResultsView.tsx";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchResultsView />
    </QueryClientProvider>
  );
}

export default App;
