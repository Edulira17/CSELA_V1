import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;