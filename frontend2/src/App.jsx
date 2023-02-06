import Router from "./components/navigation/Router";
import { Stack, Container } from "react-bootstrap";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NavigationBar from "./components/navigation/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Stack gap={3}>
          <Container>
            <NavigationBar />
            <Router />
          </Container>
        </Stack>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
