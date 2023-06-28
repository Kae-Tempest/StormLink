import Route from "@ioc:Adonis/Core/Route";

Route.get("/login", async ({ inertia }) => {
  return inertia.render("Login");
});
Route.get("/signup", async ({ inertia }) => {
  return inertia.render("SignUp");
});
Route.post("login", "UsersController.login");
Route.post("signup", "UsersController.signup");
Route.post("logout", "UsersController.logout");

Route.group(() => {
  Route.post("/postimg", "PostsController.storeimg");
  Route.post("/posttxt", "PostsController.storetxt");
  Route.post("/usersettings/:id", "UsersController.edit");
  Route.post("/comment", "CommentsController.store");

  Route.get("/postinfo/:id", "PostsController.show");
  Route.get("/postuser/:id", "PostsController.showUser");
  Route.get("/post", "PostsController.index");
  Route.get("/userinfo/:id", "UsersController.show");
  Route.get('/comment/:id', "CommentsController.show")

  Route.get("/", async ({ inertia }) => {
    return inertia.render("Home");
  });
  Route.get("/post/:id", async ({ inertia }) => {
    return inertia.render("Post");
  });
  Route.get("/user/:id", async ({ inertia }) => {
    return inertia.render("User");
  });
}).middleware("auth");
