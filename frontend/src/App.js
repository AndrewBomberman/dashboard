import Navbar from "./components/Navbar";
import Router from "./components/Router";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


export default function App() {
  
  const queryClient = new QueryClient()
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        
        <Stack gap={3}>
          <Navbar/>
          <Container>
            <Router/>
          </Container>
        </Stack>
        <ReactQueryDevtools initialIsOpen={false}/>
        
      </QueryClientProvider>
    </div>
  );
}
