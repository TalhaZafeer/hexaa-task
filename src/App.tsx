import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Error404 from "./pages/Error404/Error404";
import { routes } from "./common/routes";
import HistoricalOptions from "./pages/HistoricalOptions/HistoricalOptions";
import DailyTimeSeries from "./pages/DailyTimeSeries/DailyTimeSeries";
import NewsFeed from "./pages/NewsFeed/NewsFeed";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DailyTimeSeries />} />
            <Route
              path={routes.historicalOptions}
              element={<HistoricalOptions />}
            />
            <Route path={routes.newsFeed} element={<NewsFeed />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
