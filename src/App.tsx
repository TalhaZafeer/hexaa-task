import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import DailyTimeSeries from "./pages/DailyTimeSeries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DailyTimeSeries />
      </div>
    </QueryClientProvider>
  );
}

export default App;
