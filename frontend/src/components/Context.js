import { createContext } from "react";


export const AppContext = createContext();
const queryClient = new QueryClient();


export const AppContextProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies()

    const context = {
        token:{
            value:cookies,
            add:setCookie,
            remove:removeCookie
        }
    }

  return (
    <AppContext.Provider value={context}>
      <GoogleOAuthProvider clientId="">
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </CookiesProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </AppContext.Provider>
  );
};
