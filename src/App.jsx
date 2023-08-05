import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Header from "./Layout/Header";
import SignUp from "./Layout/User/SignUp";
import Login from "./Layout/User/Login";
import UploadMovie from "./Pages/UploadMovie";
import MovieRoute from "./Pages/MovieRoute";
import MovieDetails from "./Pages/MovieDetails";
import { AuthProvider } from "./store/AuthContext";
import ShowingMovies from "./Layout/ShowingMovies";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  const router = createBrowserRouter([
    { path: "", element: <Header /> },
    { path: "sign-in", element: <Login /> },
    { path: "sign-up", element: <SignUp /> },
    { path: "upload-movie", element: <UploadMovie /> },
    {
      path: "movies",
      element: <MovieRoute />,
      children: [
        { index: true, element: <ShowingMovies /> },
        { path: ":movieId", element: <MovieDetails /> },
        { path: ":movieId/cart", element: <Cart /> },
      ],
    },
    { path: "checkout", element: <Checkout /> },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
