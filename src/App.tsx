import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Second from "./routes/second";
import Header from "./routes/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "2",
        element: <Second />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
