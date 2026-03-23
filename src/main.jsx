import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Movies from "./routes/Movies.jsx";
import Login from "./routes/Login.jsx";
import MovieDetail, { loader as detailLoader } from "./routes/MovieDetail.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/:id",
        element: <MovieDetail />,
        loader: detailLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
