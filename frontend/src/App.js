import Navbar from "./templates/Navbar";
import Router from "./global/Router";
import Container from 'react-bootstrap/Container';
import { QueryClientProvider, QueryClient, Query } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export default function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  })
  console.log(queryClient)
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <Container>
          <Router/>
        </Container>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </div>
  );
}
