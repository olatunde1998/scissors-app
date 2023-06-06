import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Pelumi from "./components/pelumi";
import Adaeze from "./components/adaeze";
import Lucas from "./components/lucas";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home name="This is Home page" />} />
        <Route
          path="/register"
          element={<Register name="This is Register page" />}
        />
        <Route path="/login" element={<Login name="This is login page" />} />
        <Route path="/pelumi" element={<Pelumi />} />
        <Route path="/adaeze" element={<Adaeze />} />
        <Route path="/lucas" element={<Lucas />} />
      </Route>
    )
  );
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div className="mt-4 mx-2 flex justify-between">
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div>
          <Link to="/register" className="mr-4">
            Go to Register
          </Link>
          <Link to="/login">Go to Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
