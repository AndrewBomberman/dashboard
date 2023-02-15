import * as React from "react";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/style/Layout";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
