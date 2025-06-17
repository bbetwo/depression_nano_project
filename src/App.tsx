import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPages } from "./pages/CartPages";
import { HomePages } from "./pages/HomePages";

const router = createBrowserRouter([
  {
    path: "/eba",
    element: <CartPages />,
  },
  {
    path: "/home",
    element: <HomePages />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
