import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";

export default [
  {
    key: "home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    key: "movies",
    path: "/movies",
    exact: true,
    component: Movies
  },
  {
    key: "notfound",
    component: NotFound
  }
];
