import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layout/MainLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// * AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("./components/authentication/Login")));
const Logup = Loadable(lazy(() => import("./components/authentication/Logup")));

const Home = Loadable(lazy(() => import("./views/Home")));

const routes: RouteObject[] = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logup",
        element: <Logup />,
      },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
