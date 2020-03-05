import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";
import Front from "@/pages/Front";
import Admin from "@/pages/Admin";
import AdminHome from "@/pages/Admin/Home";
import AdminNotFound from "@/pages/Admin/NotFound";
import AdminSystemManage from "@/pages/Admin/SystemManage";
import AdminUserManage from "@/pages/Admin/UserManage";

export default [
  {
    key: "admin",
    path: "/admin",
    component: Admin,
    routes: [
      {
        key: "home",
        path: "/admin",
        exact: true,
        component: AdminHome
      },
      {
        key: "sys",
        path: "/admin/system",
        exact: true,
        component: AdminSystemManage
      },
      {
        key: "user",
        path: "/admin/user",
        exact: true,
        component: AdminUserManage
      },
      {
        key: "notfound",
        component: AdminNotFound
      }
    ]
  },
  {
    key: "front",
    path: "/",
    component: Front,
    routes: [
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
    ]
  }
];
